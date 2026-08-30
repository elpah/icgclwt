import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig, loadEnv, type Connect } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {
  isMailConfigured,
  parseContactPayload,
  sendContactEmail,
} from './server/contactMail';

function readJsonBody(req: IncomingMessage) {
  return new Promise<unknown>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', chunk => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function writeJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

function contactApiPlugin(): {
  name: string;
  configureServer: (server: { middlewares: Connect.Server }) => void;
  configurePreviewServer: (server: { middlewares: Connect.Server }) => void;
} {
  const handleContact: Connect.NextHandleFunction = (req, res) => {
    if (req.method !== 'POST') {
      writeJson(res, 405, { error: 'Method not allowed' });
      return;
    }

    void readJsonBody(req)
      .then(async body => {
        const parsed = parseContactPayload(body);
        if (!parsed.ok) {
          writeJson(res, 400, { error: parsed.error });
          return;
        }

        if (!isMailConfigured()) {
          writeJson(res, 503, { error: 'Email is not configured yet.' });
          return;
        }

        await sendContactEmail(parsed.data);
        writeJson(res, 200, { ok: true });
      })
      .catch(error => {
        const invalidJson = error instanceof Error && error.message === 'Invalid JSON';
        writeJson(
          res,
          invalidJson ? 400 : 500,
          {
            error: invalidJson
              ? 'Please fill in the form and try again.'
              : 'We could not send your message. Please try again.',
          }
        );
      });
  };

  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', handleContact);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/contact', handleContact);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }

  return {
    plugins: [react(), tailwindcss(), contactApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
