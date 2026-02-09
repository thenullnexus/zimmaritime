import { useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Anchor, Globe, Ship } from 'lucide-react';
import WorldMap from '@/components/ports/WorldMap';

// Import Assets
import heroVideo from '@/assets/hero-background.mp4';
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
      color: 'from-blue-600 to-indigo-600'
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
      color: 'from-amber-600 to-orange-600'
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
      color: 'from-emerald-600 to-teal-600'
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
      color: 'from-violet-600 to-purple-600'
    },
  ];

  return (
    <Layout>
      <div className="bg-slate-900 min-h-screen">

        {/* Hero Section with Video Background */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-900/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>

          <div className="container mx-auto px-4 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "outCirc" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 mx-auto">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-100">Global Maritime Network</span>
              </div>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Borders</span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Seamlessly connecting India to the Persian Gulf, Southeast Asia, and beyond with our extensive fleet and strategic partnerships.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('world-map')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
                >
                  View Network
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Stats Section - Glassmorphism */}
        <section className="relative -mt-20 z-30 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: "Active Regions", value: "4", icon: Globe },
                { label: "Major Ports", value: "30+", icon: MapPin },
                { label: "Vessels Deployed", value: "12+", icon: Ship },
                { label: "Operations", value: "24/7", icon: Anchor },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl hover:bg-slate-800/70 transition-colors group"
                >
                  <stat.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* World Map Component */}
        <div id="world-map">
          <WorldMap />
        </div>

        {/* Interactive Region Showcase */}
        <section className="py-24 bg-slate-900 overflow-hidden" ref={containerRef}>
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Regional Focus</h2>
              <div className="h-1 w-24 bg-blue-500 rounded-full" />
            </div>

            <div className="space-y-32">
              {regions.map((region, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  key={region.id}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-8">
                    <div className={`inline-block px-3 py-1 rounded bg-gradient-to-r ${region.color} text-white text-xs font-bold uppercase tracking-wider`}>
                      {region.highlight}
                    </div>

                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-100">
                      {region.name}
                    </h3>

                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                      {region.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/5">
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-white">{region.stats.ports}</div>
                        <div className="text-sm text-slate-500 uppercase">Ports Serviced</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-white">{region.stats.coverage}</div>
                        <div className="text-sm text-slate-500 uppercase">Market Coverage</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {region.ports.map((port, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-300 bg-slate-800/30 p-3 rounded-lg border border-white/5 hover:bg-slate-800/60 transition-colors">
                          <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <div>
                            <span className="block font-medium text-sm text-white">{port.name}</span>
                            <span className="block text-xs text-slate-500">{port.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Card */}
                  <div className="flex-1 w-full">
                    <div className="relative group">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${region.color} rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
                        <img
                          src={region.image}
                          alt={region.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tuticorin Primary Hub Special Section */}
        <section className="relative py-32 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548247661-3d7105dd3d4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Anchor className="w-16 h-16 text-blue-500 mx-auto mb-8" />
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8">
                V.O. Chidambaranar Port<br />
                <span className="text-blue-500 text-2xl md:text-3xl font-sans font-normal block mt-4 tracking-widest uppercase">The Heart of our Operations</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Strategically located on the southeastern coast of India, Tuticorin serves as our primary gateway, connecting the Indian subcontinent to major global trade routes.
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  { title: 'Terminal Operations', desc: 'State-of-the-art container and bulk terminals geared for high-volume transactions.' },
                  { title: 'Warehouse Logistics', desc: 'Over 500,000 sq.ft of bonded warehousing space for seamless cargo storage.' },
                  { title: 'Intermodal Connectivity', desc: 'Direct rail and road links to major industrial hubs across South India.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
                    <h4 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
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
