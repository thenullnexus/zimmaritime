import { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Anchor, Globe, Ship, Sparkles } from 'lucide-react';
import WorldMap from '@/components/ports/WorldMap';
import { useCountUp } from '@/hooks/use-count-up';

const StatCounter = ({ value, className }: { value: string, className?: string }) => {
  const numericMatch = value.match(/(\d+(?:\.\d+)?)/);
  if (!numericMatch) return <span className={className}>{value}</span>;

  const numericValue = parseFloat(numericMatch[0]);
  const parts = value.split(numericMatch[0]);
  const prefix = parts[0];
  const suffix = parts[1];

  const { count, ref } = useCountUp(numericValue, 2000);

  const isDecimal = numericMatch[0].includes('.');
  const displayCount = (isDecimal && count === Math.floor(numericValue)) ? numericMatch[0] : count;

  return (
    <span ref={ref} className={className}>
      {prefix}{displayCount}{suffix}
    </span>
  );
};

// Import Assets
import heroVideo from '@/assets/global-net.mp4';
import indiaImg from '@/assets/india.png';
import persianImg from '@/assets/persian.png';
import southAsiaImg from '@/assets/south-asia.png';
import maldivesImg from '@/assets/maldives.png';

const Ports = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const regions = [
    {
      id: 'india',
      name: 'India',
      description: 'Our home market with extensive coverage across all major ports, serving as the backbone of our regional operations.',
      highlight: 'Tuticorin Port - Primary Hub',
      stats: { ports: '8+', coverage: '100%' },
      ports: [
        { name: 'Tuticorin (V.O.C)', type: 'Primary Hub' },
        { name: 'Chennai', type: 'Major Port' },
        { name: 'Mumbai (JNPT)', type: 'Major Port' },
        { name: 'Kandla', type: 'Major Port' },
        { name: 'Visakhapatnam', type: 'Major Port' },
        { name: 'Cochin', type: 'Major Port' },
        { name: 'Mundra', type: 'Private Port' },
        { name: 'Kolkata/Haldia', type: 'Major Port' },
      ],
      image: indiaImg,
      color: 'blue-500',
      glowColor: 'rgba(59, 130, 246, 0.15)'
    },
    {
      id: 'persian',
      name: 'Persian Gulf',
      description: 'Strategic coverage across the oil-rich Persian Gulf nations, facilitating energy and commodity trade.',
      highlight: 'UAE & Oman Focus',
      stats: { ports: '7+', coverage: 'High' },
      ports: [
        { name: 'Jebel Ali, Dubai', type: 'Major Hub' },
        { name: 'Abu Dhabi', type: 'Major Port' },
        { name: 'Sohar, Oman', type: 'Major Port' },
        { name: 'Salalah, Oman', type: 'Transshipment' },
        { name: 'Kuwait Port', type: 'Major Port' },
        { name: 'Hamad, Qatar', type: 'Major Port' },
        { name: 'Dammam, Saudi', type: 'Major Port' },
        { name: 'Bandar Abbas', type: 'Major Port' },
      ],
      image: persianImg,
      color: 'amber-500',
      glowColor: 'rgba(245, 158, 11, 0.15)'
    },
    {
      id: 'southeast',
      name: 'Southeast Asia',
      description: 'Connecting to the fastest-growing maritime region with direct links to global trade hubs.',
      highlight: 'Singapore Hub',
      stats: { ports: '7+', coverage: 'Growing' },
      ports: [
        { name: 'Singapore', type: 'Global Hub' },
        { name: 'Port Klang', type: 'Major Port' },
        { name: 'Tanjung Pelepas', type: 'Transshipment' },
        { name: 'Laem Chabang', type: 'Major Port' },
        { name: 'Manila', type: 'Major Port' },
        { name: 'Jakarta', type: 'Major Port' },
        { name: 'Surabaya', type: 'Major Port' },
        { name: 'Penang', type: 'Regional Port' },
      ],
      image: southAsiaImg,
      color: 'emerald-500',
      glowColor: 'rgba(16, 185, 129, 0.15)'
    },
    {
      id: 'emerging',
      name: 'Maldives & Vietnam',
      description: 'Emerging routes with growing trade volumes, focusing on niche markets and specialized cargo.',
      highlight: 'Emerging Markets',
      stats: { ports: '6+', coverage: 'Niche' },
      ports: [
        { name: 'Malé, Maldives', type: 'Capital Port' },
        { name: 'Hulhumalé', type: 'Regional Port' },
        { name: 'Ho Chi Minh', type: 'Major Port' },
        { name: 'Hai Phong', type: 'Major Port' },
        { name: 'Da Nang', type: 'Regional Port' },
        { name: 'Cai Mep', type: 'Deep Water' },
      ],
      image: maldivesImg,
      color: 'indigo-500',
      glowColor: 'rgba(99, 102, 241, 0.15)'
    },
  ];

  return (
    <Layout>
      <div className="bg-[#020617] min-h-screen">
        {/* Cinematic Background Elements (Shared with other premium pages) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/5 rounded-full blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        {/* Hero Section with Video Background */}
        <section className="relative pt-44 pb-32 overflow-hidden bg-[#020617]">
          {/* Subtle Video Background Layer */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/40 to-[#020617] z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-left">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[2px] w-16 bg-primary" />
                <p className="text-primary font-bold uppercase tracking-[0.5em] text-xs">Global Maritime Network</p>
              </motion.div>

              <h1 className="font-serif text-6xl md:text-8xl font-bold text-premium text-glow mb-10 leading-[0.85] tracking-tighter">
                Strategic <br />
                <span className="text-white">Global Reach</span>
              </h1>

              <p className="text-white/40 text-xl md:text-3xl leading-relaxed max-w-2xl font-light italic mb-12">
                Seamlessly connecting continents through our extensive port network
                and deep-sea operational expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => document.getElementById('world-map')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-full text-sm font-bold overflow-hidden transition-all hover:scale-105 shadow-xl shadow-primary/20"
                >
                  <span className="relative z-10">Explore Network Map</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Stats Section - Premium Glassmorphism */}
        <section className="relative -mt-20 z-30 pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: "Active Regions", value: "4", icon: Globe, color: "text-blue-500" },
                { label: "Major Ports", value: "30+", icon: MapPin, color: "text-primary" },
                { label: "Vessels Deployed", value: "12+", icon: Ship, color: "text-indigo-500" },
                { label: "Operations", value: "24/7", icon: Anchor, color: "text-emerald-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/[0.02] backdrop-blur-[50px] border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />
                  <div className="text-5xl font-bold text-white mb-2 font-serif">
                    {stat.value.match(/\d+/) ? (
                      <StatCounter value={stat.value} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* World Map Component */}
        <div id="world-map" className="relative z-10 bg-[#020617] border-y border-white/5 py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-premium mb-8 text-glow tracking-tighter">Strategic Coverage</h2>
            <p className="text-white/40 text-xl font-light italic max-w-2xl mx-auto">Visualizing our maritime dominance across strategic global trade corridors.</p>
          </div>
          <WorldMap />
        </div>

        {/* Interactive Region Showcase */}
        <section className="py-32 bg-[#020617] relative overflow-hidden" ref={containerRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-24 flex flex-col items-start">
              <div className="h-[2px] w-16 bg-primary mb-8" />
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-premium text-glow tracking-tighter">Regional Focus</h2>
            </div>

            <div className="space-y-48">
              {regions.map((region, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  key={region.id}
                  className={`flex flex-col lg:flex-row gap-20 lg:gap-32 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-10">
                    <div className="flex flex-col gap-4">
                      <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-2">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        {region.highlight}
                      </span>
                      <h3 className="font-serif text-5xl md:text-6xl font-bold text-white tracking-tighter">
                        {region.name}
                      </h3>
                    </div>

                    <p className="text-xl text-white/50 leading-relaxed font-light italic">
                      {region.description}
                    </p>

                    <div className="grid grid-cols-2 gap-10 py-10 border-y border-white/10">
                      <div className="space-y-2">
                        <StatCounter value={region.stats.ports} className="text-4xl font-bold text-white font-serif" />
                        <div className="text-xs text-white/30 uppercase tracking-[0.2em] font-bold">Ports Serviced</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-white font-serif">{region.stats.coverage}</div>
                        <div className="text-xs text-white/30 uppercase tracking-[0.2em] font-bold">Market Coverage</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {region.ports.map((port, i) => (
                        <div key={i} className="flex items-center gap-4 text-white/60 bg-white/[0.02] backdrop-blur-3xl p-4 rounded-2xl border border-white/5 hover:bg-white/[0.05] hover:text-white transition-all duration-500 group">
                          <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <span className="block font-bold text-sm text-white/80 group-hover:text-white">{port.name}</span>
                            <span className="block text-[10px] text-white/40 uppercase tracking-widest">{port.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Card - Cinematic Style */}
                  <div className="flex-1 w-full">
                    <div className="relative group">
                      <div className={`absolute -inset-4 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-20 transition duration-1000`} style={{ backgroundColor: region.glowColor }} />
                      <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl bg-black/50">
                        <img
                          src={region.image}
                          alt={region.name}
                          className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                        {/* Technical Overlay */}
                        <div className="absolute top-6 right-6 flex flex-col items-end opacity-20 pointer-events-none">
                          <span className="text-[10px] text-white font-mono uppercase tracking-[0.2em]">Sector: {region.id.toUpperCase()}</span>
                          <span className="text-[10px] text-white font-mono uppercase tracking-[0.2em]">Auth: SEC-994</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tuticorin Primary Hub Special Section - Darkened with Glow */}
        <section className="relative py-48 bg-[#020617] overflow-hidden border-t border-white/5">
          {/* Subtle noise and background glow */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 mx-auto mb-10 shadow-2xl">
                <Anchor className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <h2 className="font-serif text-5xl md:text-8xl font-bold text-premium mb-10 text-glow tracking-tighter leading-tight">
                V.O. Chidambaranar Port<br />
                <span className="text-white text-3xl md:text-4xl font-serif italic font-light block mt-6 opacity-60">The Heart of our Operations</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/40 mb-20 leading-relaxed font-light italic max-w-4xl mx-auto">
                Strategically located on the southeastern coast of India, Tuticorin serves as our primary gateway,
                connecting the Indian subcontinent to major global trade routes.
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  { title: 'Terminal Operations', desc: 'State-of-the-art container and bulk terminals geared for high-volume transactions.' },
                  { title: 'Warehouse Logistics', desc: 'Over 500,000 sq.ft of bonded warehousing space for seamless cargo storage.' },
                  { title: 'Intermodal Connectivity', desc: 'Direct rail and road links to major industrial hubs across South India.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.02] backdrop-blur-[50px] p-10 rounded-[2.5rem] border border-white/10 hover:border-primary/50 transition-all duration-700 group">
                    <h4 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-premium transition-colors duration-500">{item.title}</h4>
                    <p className="text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Ports;
