import { Facebook, Twitter, Instagram, Youtube, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    Icon: Facebook,
    href: 'https://www.facebook.com/ICGCLivingWordTemple/',
  },
  { name: 'Twitter', Icon: Twitter },
  {
    name: 'Instagram',
    Icon: Instagram,
    href: 'https://www.instagram.com/icgc_lwt/',
  },
  { name: 'YouTube', Icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-14 md:pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-linear(circle, white 1px, transparent 1px)',
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
                <h1 className="font-bold text-lg leading-tight">ICGC</h1>
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
            <h1 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">
              Quick Links
            </h1>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block"
                >
                  Our Beliefs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block"
                >
                  Find a Life Group
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFD700] transition-colors hover:translate-x-1 inline-block"
                >
                  Request Prayer
                </a>
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
                Wednesday Bible Study: 6:00 PM
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
                  className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#FFD700] hover:bg-slate-700 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} ICGC Living Word Temple. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
