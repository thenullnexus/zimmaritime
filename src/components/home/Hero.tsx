import { Link } from 'react-router-dom';
import { ArrowRight, Anchor } from 'lucide-react';
import heroVideo from '../../assets/hero-background.mp4';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 hero-overlay opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 animate-fade-up">
            <Anchor className="w-4 h-4 text-primary" />
            <span className="text-white/80 text-sm font-medium tracking-widest uppercase">Trusted Since 2012</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tighter animate-fade-up stagger-1">
            <span className="text-premium text-glow">Global Ship Brokering</span><br />
            <span className="text-primary">& Port Logistics</span> Excellence
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light italic animate-fade-up stagger-2">
            Your trusted maritime partner for vessel chartering, ship brokering,
            and comprehensive logistics solutions across India, Persian Gulf,
            and Southeast Asia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up stagger-3">
            <Link
              to="/contact"
              className="btn-primary flex items-center gap-2 group"
            >
              Contact Our Chartering Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="btn-outline"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
