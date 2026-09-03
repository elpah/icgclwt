import { Facebook, Instagram, Youtube, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import TikTokIcon from '@/components/TikTokIcon';
import {
  CHURCH_FACEBOOK_URL,
  CHURCH_INSTAGRAM_URL,
  CHURCH_TIKTOK_URL,
  CHURCH_YOUTUBE_URL,
} from '@/data/churchInfo';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    Icon: Facebook,
    href: CHURCH_FACEBOOK_URL,
  },
  { name: 'TikTok', Icon: TikTokIcon, href: CHURCH_TIKTOK_URL || undefined },
  {
    name: 'Instagram',
    Icon: Instagram,
    href: CHURCH_INSTAGRAM_URL,
  },
  { name: 'YouTube', Icon: Youtube, href: CHURCH_YOUTUBE_URL },
];

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-14 md:pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className=" p-1  flex items-center justify-center">
                <img
                  src="/images/icgc_logo.webp"
                  width="87"
                  height="80"
                  alt="ICGC Logo"
                  className="h-10 w-auto object-contain"
                  loading="eager"
                />
              </div>

              <div>
                <p className="font-bold text-lg leading-tight">ICGC</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                  Living Word Temple
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Raising leaders, shaping vision, and influencing society through Christ.
            </p>
          </div>

          <div>
            <p className="font-bold mb-6 text-white uppercase tracking-wider text-sm">
              Quick Links
            </p>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link
                  to="/about#statement-of-faith"
                  className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block"
                >
                  Our Beliefs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block"
                >
                  Request Prayer
                </Link>
              </li>
              <li>
                <Link
                  to="/ministries"
                  className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block"
                >
                  Serve in a Ministry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Services</p>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 text-[#FFD700]" />
                Sunday Service: 8:00 AM - 10:30 AM
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 text-[#FFD700]" />
                Thursday Teaching Service: 6:00 PM
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Socials</p>
            <p className="text-slate-400 text-sm mb-4">Stay updated with our weekly activities.</p>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target={href ? '_blank' : undefined}
                  rel={href ? 'noopener noreferrer' : undefined}
                  aria-label={`Follow us on ${name}`}
                  className="w-10 h-10 bg-slate-800 rounded-md flex items-center justify-center text-slate-400 hover:text-[#FFD700] hover:bg-slate-700 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-slate-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} ICGC Living Word Temple. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-center mt-4">
            Designed and Developed by{' '}
            <a
              href="https://paruah.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#FFD700] transition-colors"
            >
              Paruah Systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
