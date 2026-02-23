import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search, Globe, ChevronDown } from 'lucide-react';
import SoundToggle from '../common/SoundToggle';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Logistics Solutions', path: '/services' },
    { name: 'Global Network', path: '/ports' },
    { name: 'Fleet', path: '/vessels' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/98 shadow-maritime backdrop-blur-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo with Ultra Bright Glow Effect */}
          <Link to="/" className="flex-shrink-0 group relative">
            {/* Background Glow - Ultra Bright */}
            <div className={`absolute inset-[-15%] blur-[50px] rounded-full transition-all duration-700 ${isScrolled
              ? 'bg-blue-400 opacity-40 group-hover:opacity-100'
              : 'bg-white opacity-50 group-hover:opacity-100'
              }`} />

            <img
              src={logo}
              alt="ZIM Maritime"
              className={`h-14 lg:h-28 w-auto relative z-10 transition-all duration-500 transform group-hover:scale-110 brightness-110 group-hover:brightness-150 ${isScrolled
                ? 'drop-shadow-[0_0_15px_rgba(0,190,255,0.7)] drop-shadow-[0_0_30px_rgba(0,190,255,0.5)] group-hover:drop-shadow-[0_0_45px_rgba(0,190,255,1)]'
                : 'drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_45px_rgba(255,255,255,1)]'
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium py-2 transition-colors ${isActive(link.path)
                  ? 'text-primary'
                  : isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white hover:text-primary-foreground'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Utility & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Phone */}
            <a
              href="tel:+914412345678"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 44 1234 5678</span>
            </a>

            {/* Sound Toggle */}
            <SoundToggle isScrolled={isScrolled} />

            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <SoundToggle isScrolled={isScrolled} />
            <Link
              to="/contact"
              className="btn-primary text-xs px-4 py-2"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in absolute top-full left-0 right-0 shadow-xl">
            <nav className="py-6 px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 mt-6 border-t border-border space-y-4">
                <a
                  href="tel:+914412345678"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground bg-secondary/50 rounded-lg"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 44 1234 5678
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full block text-center py-4 text-base font-bold uppercase tracking-wider"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

