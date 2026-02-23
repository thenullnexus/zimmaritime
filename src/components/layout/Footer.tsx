import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Anchor, Ship, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Context */}
          <div className="space-y-10">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="ZIM Maritime"
                className="h-32 w-auto brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-700 hover:scale-105"
              />
            </Link>
            <p className="text-white/40 text-lg leading-relaxed font-light italic max-w-sm">
              Architecting the future of global maritime logistics through
              strategic vessel chartering and deep-water operational excellence.
            </p>
            <div className="flex items-center gap-4 text-primary/60 group">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 rounded-lg group-hover:border-primary/40 transition-colors">
                <Anchor className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-black uppercase tracking-[0.4em]">Established 2012</span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-8 bg-primary" />
              <h4 className="font-serif text-base font-bold text-white uppercase tracking-[0.3em]">Network</h4>
            </div>
            <ul className="space-y-4">
              {[
                { name: 'About Authority', path: '/about' },
                { name: 'Service Portfolio', path: '/services' },
                { name: 'Global Network', path: '/ports' },
                { name: 'Vessel Registry', path: '/vessels' },
                { name: 'Strategic Desk', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/30 hover:text-white hover:pl-2 transition-all duration-300 text-base font-light flex items-center gap-3 group"
                  >
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations Mapping */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-8 bg-primary" />
              <h4 className="font-serif text-base font-bold text-white uppercase tracking-[0.3em]">Specializations</h4>
            </div>
            <ul className="space-y-4">
              {[
                { name: 'Vessel Fixing', id: 'vessel-fixing' },
                { name: 'Ship Chartering', id: 'ship-chartering' },
                { name: 'Ship Brokering', id: 'ship-brokering' },
                { name: 'Port Logistics', id: 'port-logistics' },
                { name: 'Subcontinent Trans', id: 'surface-transportation' },
                { name: 'CHA & Stevedoring', id: 'cha-stevedoring' },
              ].map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-white/30 hover:text-white hover:pl-2 transition-all duration-300 text-base font-light flex items-center gap-3 group"
                  >
                    <Ship className="w-3 h-3 text-primary/40 group-hover:text-primary transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational HQ */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-8 bg-primary" />
              <h4 className="font-serif text-base font-bold text-white uppercase tracking-[0.3em]">Operational HQ</h4>
            </div>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group/addr">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 rounded-lg group-hover/addr:border-primary/40 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Marina+Bay+Road,+Chennai+600001,+Tamil+Nadu,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors text-base font-light italic leading-relaxed"
                >
                  123 Marina Bay Road,<br />
                  Chennai 600001,<br />
                  Tamil Nadu, India
                </a>
              </li>
              <li className="flex items-center gap-4 group/comm">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 rounded-lg group-hover/comm:border-primary/40 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+914412345678" className="text-white/40 hover:text-white transition-colors text-base font-bold tracking-wider">
                  +91 44 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-4 group/comm">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 rounded-lg group-hover/comm:border-primary/40 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:chartering@zimmaritime.com" className="text-white/40 hover:text-white transition-colors text-base font-medium italic">
                  chartering@zimmaritime.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Industrial Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
              <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em]">
                © {currentYear} ZIM MARITIME INDUSTRIAL GROUP
              </p>
              <div className="flex items-center gap-8">
                <Link to="/privacy" className="text-white/20 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                  Privacy Protocols
                </Link>
                <Link to="/terms" className="text-white/20 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                  Service Terms
                </Link>
              </div>
            </div>

            {/* System Status */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <span className="text-primary text-sm font-black uppercase tracking-[0.3em]">Operational Readiness: Alpha</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
