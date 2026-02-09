import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Region Images
import indiaImg from '@/assets/india.png';
import persianImg from '@/assets/persian.png';
import southAsiaImg from '@/assets/south-asia.png';
import maldivesImg from '@/assets/maldives.png';

const FocusPorts = () => {
  const regions = [
    {
      name: 'India',
      highlight: 'Tuticorin Port',
      ports: ['Chennai', 'Mumbai', 'Kandla', 'Vizag', 'Cochin'],
      image: indiaImg,
    },
    {
      name: 'Persian Gulf',
      highlight: 'UAE & Oman',
      ports: ['Dubai', 'Abu Dhabi', 'Muscat', 'Kuwait', 'Qatar'],
      image: persianImg,
    },
    {
      name: 'Southeast Asia',
      highlight: 'Singapore Hub',
      ports: ['Singapore', 'Thailand', 'Philippines', 'Indonesia', 'Malaysia'],
      image: southAsiaImg,
    },
    {
      name: 'Maldives & Vietnam',
      highlight: 'Emerging Routes',
      ports: ['Malé', 'Ho Chi Minh', 'Hai Phong', 'Da Nang'],
      image: maldivesImg,
    },
  ];

  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <p className="text-primary font-semibold uppercase tracking-widest text-[10px]">Our Coverage</p>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-glow">
            Focus Ports & <span className="text-primary">Regions</span>
          </h2>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Strategic presence across key maritime trade routes connecting
            <span className="text-white font-medium"> India to the global economy</span>.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, index) => (
            <div
              key={region.name}
              className="group relative h-[450px] overflow-hidden rounded-2xl border border-white/10 transition-all duration-700 hover:border-primary/50"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="glass-morphism px-3 py-1 rounded-full border border-white/20">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-primary animate-bounce" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
                      {region.highlight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {region.name}
                </h3>

                {/* Ports list with animation */}
                <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="flex flex-wrap gap-2">
                    {region.ports.slice(0, 4).map((port) => (
                      <span
                        key={port}
                        className="text-[10px] bg-white/10 backdrop-blur-sm text-white/90 px-2 py-1 rounded-md border border-white/10 uppercase font-medium tracking-wider"
                      >
                        {port}
                      </span>
                    ))}
                    {region.ports.length > 4 && (
                      <span className="text-[10px] bg-primary/20 text-primary px-2 py-1 rounded-md font-bold">
                        +{region.ports.length - 4} MORE
                      </span>
                    )}
                  </div>
                </div>

                {/* Visual Line */}
                <div className="w-0 group-hover:w-full h-[2px] bg-primary mt-6 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            to="/ports"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_rgba(180,30,30,0.3)]"
          >
            <span>View All Global Ports</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FocusPorts;
