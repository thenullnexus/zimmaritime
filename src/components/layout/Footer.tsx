import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Anchor, Ship } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logo} alt="ZIM Maritime" className="h-40 w-auto brightness-0 invert" />
            <p className="text-white/70 text-sm leading-relaxed">
              Premier ship brokering and maritime logistics solutions since 2012.
              Your trusted partner for vessel chartering across global waters.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Anchor className="w-5 h-5" />
              <span className="text-sm font-medium">Est. 2012</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Ports & Coverage', path: '/ports' },
                { name: 'Vessel Types', path: '/vessels' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Vessel Fixing',
                'Ship Chartering',
                'Ship Brokering',
                'Port Logistics',
                'Surface Transportation',
                'CHA & Stevedoring',
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-white/70 text-sm">
                  <Ship className="w-4 h-4 text-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  123 Marina Bay Road,<br />
                  Chennai 600001,<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+914412345678" className="text-white/70 hover:text-white transition-colors text-sm">
                  +91 44 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:chartering@zimmaritime.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  chartering@zimmaritime.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} ZIM Maritime. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
