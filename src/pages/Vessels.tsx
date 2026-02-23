import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Ship,
  Anchor,
  ArrowRight,
  Check,
  Sparkles,
  Target,
  Compass,
  Activity,
  Box,
  Layers,
  Globe,
  Clock,
  TrendingUp
} from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';

const StatCounter = ({ value, className }: { value: string, className?: string }) => {
  const numericMatch = value.match(/(\d+(?:\.\d+)?)/);
  if (!numericMatch) return <span className={className}>{value}</span>;

  const numericValue = parseFloat(numericMatch[0]);
  const parts = value.split(numericMatch[0]);
  const prefix = parts[0];
  const suffix = parts[1];

  const { count, ref } = useCountUp(numericValue, 2000);

  // For decimal values, ensure the final display is exact
  const isDecimal = numericMatch[0].includes('.');
  const displayCount = (isDecimal && count === Math.floor(numericValue)) ? numericMatch[0] : count;

  return (
    <span ref={ref} className={className}>
      {prefix}{displayCount}{suffix}
    </span>
  );
};

// Cargo Images
import coalImg from '@/assets/cargo/coal.png';
import ironOreImg from '@/assets/cargo/iron-ore.png';
import grainImg from '@/assets/cargo/grain.png';
import steelImg from '@/assets/cargo/steel.png';
import cementImg from '@/assets/cargo/cement.png';
import fertilizerImg from '@/assets/cargo/fertilizer.png';

// Vessel Images
import cargoBargeImg from '@/assets/vessels/cargo-barge.png';
import tugBargeImg from '@/assets/vessels/tug-barge.png';
import miniBulkImg from '@/assets/vessels/mini-bulk.png';
import handysizeImg from '@/assets/vessels/handysize.png';
import handymaxImg from '@/assets/vessels/handymax.png';
import supramaxImg from '@/assets/vessels/supramax.png';

const vesselTypes = [
  {
    name: 'Self-Propelled Cargo Barges',
    dwt: '2,000 - 4,000 DWT',
    description: 'Versatile vessels ideal for coastal and short-sea shipping operations, particularly suited for shallow draft requirements.',
    features: [
      'Shallow draft capability',
      'Ideal for river and coastal trades',
      'Self-propulsion for independent operation',
      'Flexible cargo options',
    ],
    image: cargoBargeImg,
    color: 'emerald-500',
  },
  {
    name: 'Tug & Flat Top Barges',
    dwt: '5,000 - 15,000 DWT',
    description: 'Economical solution for project cargo and bulk commodities, offering flexibility in loading operations.',
    features: [
      'Cost-effective for short voyages',
      'Suitable for oversized cargo',
      'Flexible loading/unloading',
      'No port draft restrictions',
    ],
    image: tugBargeImg,
    color: 'blue-500',
  },
  {
    name: 'Mini Bulk Carriers',
    dwt: '2,000 - 20,000 DWT',
    description: 'Compact bulk carriers designed for feeder services and ports with size restrictions.',
    features: [
      'Access to smaller ports',
      'Efficient for regional trades',
      'Lower freight costs for small lots',
      'Quick turnaround times',
    ],
    image: miniBulkImg,
    color: 'primary',
  },
  {
    name: 'Handysize',
    dwt: '15,000 - 35,000 DWT',
    description: 'The workhorses of the dry bulk fleet, offering excellent versatility for a wide range of cargoes and ports.',
    features: [
      'Self-loading gear available',
      'Wide port accessibility',
      'Versatile cargo handling',
      'Established trade routes',
    ],
    image: handysizeImg,
    color: 'indigo-500',
  },
  {
    name: 'Handymax',
    dwt: '35,000 - 50,000 DWT',
    description: 'Larger capacity with maintained port flexibility, ideal for medium-volume cargo movements.',
    features: [
      'Enhanced cargo capacity',
      'Good port accessibility',
      'Economies of scale',
      'Modern fleet availability',
    ],
    image: handymaxImg,
    color: 'amber-500',
  },
  {
    name: 'Supramax',
    dwt: '50,000 - 60,000 DWT',
    description: 'Premium segment offering optimal balance between cargo capacity and port accessibility.',
    features: [
      'Maximum capacity with gear',
      'Superior cargo handling',
      'Fuel efficiency',
      'Extended range capability',
    ],
    image: supramaxImg,
    color: 'red-500',
  },
];

const cargoTypes = [
  {
    name: 'Coal Handling',
    code: 'COM-CL-01',
    icon: Activity,
    image: coalImg,
    description: 'High-volume thermal and coking coal logistics utilizing precision handling protocols to ensure operational efficiency and environmental integrity across global trade routes.',
    stats: [
      { label: 'Annual Tonnage', value: '4.5M+', icon: TrendingUp },
      { label: 'Active Routes', value: '24', icon: Globe },
      { label: 'Load Time', value: '18h Avg', icon: Clock },
    ]
  },
  {
    name: 'Iron Ore Logistics',
    code: 'COM-FE-02',
    icon: Layers,
    image: ironOreImg,
    description: 'Industrial-strength mineral transport for the global steel industry. Our specialized fleet handles high-density pellets and fines with unmatched structural security.',
    stats: [
      { label: 'Fleet Capacity', value: '12M DWT', icon: TrendingUp },
      { label: 'Major Ports', value: '18', icon: Globe },
      { label: 'Safety Record', value: '99.9%', icon: Clock },
    ]
  },
  {
    name: 'Agricultural Grains',
    code: 'COM-AG-03',
    icon: Box,
    image: grainImg,
    description: 'Securing global food supply chains with moisture-controlled, premium storage solutions. We provide high-speed loading and discharge for wheat, corn, and soy.',
    stats: [
      { label: 'Cargo Purity', value: '99.98%', icon: TrendingUp },
      { label: 'Storage Time', value: '0.5d', icon: Clock },
      { label: 'Export Terminals', value: '12', icon: Globe },
    ]
  },
  {
    name: 'Steel & Industrial',
    code: 'COM-ST-04',
    icon: Ship,
    image: steelImg,
    description: 'Precision transport for high-value industrial steel. From oversized structural components to heavy-gauge coils, we ensure damage-free global delivery.',
    stats: [
      { label: 'Handling Gear', value: 'Heavy Lift', icon: TrendingUp },
      { label: 'Global Coverage', value: '80+ Ports', icon: Globe },
      { label: 'Insurance Rate', value: 'AAA', icon: Clock },
    ]
  },
  {
    name: 'Cement & Minerals',
    code: 'COM-CE-05',
    icon: Target,
    image: cementImg,
    description: 'Specialized bulk clinker and cement logistics. Our dust-free loading systems and moisture-sealed holds guarantee the quality of construction-grade materials.',
    stats: [
      { label: 'Transit Loss', value: '0.01%', icon: TrendingUp },
      { label: 'Dust Control', value: 'Level 4', icon: Clock },
      { label: 'Daily Output', value: '12k MT', icon: Globe },
    ]
  },
  {
    name: 'Fertilizer Solutions',
    code: 'COM-CH-06',
    icon: Sparkles,
    image: fertilizerImg,
    description: 'Expert handling of hazardous and sensitive fertilizer products. We maintain strict safety adherence for chemical compounds while optimizing for seasonal peaks.',
    stats: [
      { label: 'Safety Protocol', value: 'ISO 9001', icon: TrendingUp },
      { label: 'Peak Capacity', value: '25k MT/d', icon: Globe },
      { label: 'Clean-out Time', value: '4h', icon: Clock },
    ]
  },
];

const VesselCard = ({ vessel, index }: { vessel: typeof vesselTypes[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-full"
    >
      <div className="overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/10 group/card transition-all duration-500 hover:border-primary/40 h-full flex flex-col min-h-[620px] rounded-[2.5rem] shadow-2xl">
        {/* Image Container */}
        <div className="h-72 relative overflow-hidden">
          <img
            src={vessel.image}
            alt={vessel.name}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

          <div className="absolute top-8 right-8 px-6 py-2 bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-3 rounded-full">
            <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-primary shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
            <span className="text-base text-white font-bold uppercase tracking-[0.2em]">{vessel.dwt}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-12 flex-1 flex flex-col text-left">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/40">
              <Ship className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
              {vessel.name}
            </h3>
          </div>

          <p className="text-white/30 text-[16px] mb-10 leading-relaxed font-light italic">
            {vessel.description}
          </p>

          <div className="w-full h-[1px] bg-white/5 mb-10" />

          <ul className="space-y-5 mb-12 flex-1">
            {vessel.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4 group/item">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20 group-hover/item:border-primary transition-all">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-white/40 text-[15px] font-medium tracking-tight leading-tight italic group-hover/item:text-white transition-colors">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="inline-flex items-center gap-4 text-white font-bold text-sm uppercase tracking-[0.4em] group/link transition-all hover:text-primary bg-white/[0.03] border border-white/10 px-8 py-4 rounded-full self-start"
          >
            Inquire Tonnage
            <ArrowRight className="w-5 h-5 text-primary transform transition-transform group-hover/link:translate-x-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Vessels = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <Layout>
      <div className="bg-[#020617] min-h-screen">
        {/* Cinematic Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-indigo-600/5 rounded-full blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-44 pb-32 overflow-hidden bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="h-[2px] w-24 bg-primary" />
                <p className="text-primary font-bold uppercase tracking-[0.6em] text-sm">Global Industrial Authority</p>
              </motion.div>

              <h1 className="font-serif text-6xl md:text-[7.5rem] font-bold text-premium text-glow mb-14 leading-[0.85] tracking-tighter">
                A Diverse & <br />
                <span className="text-white uppercase">Capable Fleet</span>
              </h1>

              <p className="text-white/40 text-xl md:text-3xl leading-relaxed max-w-4xl font-light italic">
                From nimble coastal barges to global Supramax workhorses,
                we orchestrate a spectrum of tonnage to meet the precise demands of international maritime trade.
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Segments */}
        <section className="py-40 border-t border-white/5 relative bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-6 px-10 py-4 bg-white/[0.02] border border-white/10 rounded-full mb-10 backdrop-blur-3xl shadow-2xl">
                  <Compass className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-white/60 text-sm uppercase tracking-[0.4em] font-bold">Coverage: 2,000 - 60,000 DWT</span>
                </div>
                <h2 className="font-serif text-5xl md:text-8xl font-bold text-white tracking-tighter text-glow">
                  Fleet <span className="text-primary uppercase italic">Segments</span>
                </h2>
              </div>
              <p className="text-white/20 max-w-md text-xl italic leading-relaxed font-light border-l border-white/10 pl-10 py-4">
                We provide comprehensive vessel coverage, matching your specific cargo
                requirements with the ideal tonnage for maximum operational authority.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {vesselTypes.map((vessel, index) => (
                <VesselCard key={vessel.name} vessel={vessel} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Diverse Cargo Handling */}
        <section className="bg-[#020617] relative border-t border-white/5 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="py-48 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="flex flex-col items-center gap-6 mb-12">
                  <span className="text-primary font-bold uppercase tracking-[0.6em] text-sm">Project Logistics</span>
                  <div className="w-20 h-[1px] bg-primary/30" />
                </div>
                <h2 className="font-serif text-6xl md:text-[8rem] font-bold text-premium text-glow tracking-tighter leading-[0.8] mb-12">
                  Diverse Cargo <br /><span className="text-white/10 italic">Handling</span>
                </h2>
              </motion.div>
            </div>

            {/* Showcases */}
            <div className="pb-48 space-y-0">
              {cargoTypes.map((cargo, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div key={cargo.name} className="py-48 border-t border-white/5 first:border-t-0">
                    <div className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-40 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Image Block */}
                      <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex-1 w-full"
                      >
                        <div className="relative group">
                          <div className="absolute -inset-10 bg-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] border border-white/10 bg-black/50">
                            <img
                              src={cargo.image}
                              alt={cargo.name}
                              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                            {/* Technical Overlay */}
                            <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-20 group-hover:opacity-40 transition-opacity">
                              <span className="text-xs text-white font-mono uppercase tracking-[0.2em]">{cargo.code}</span>
                              <div className="w-12 h-[1px] bg-white/50 mt-2" />
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Text Block */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex-1 max-w-2xl"
                      >
                        <div className="mb-10 text-left">
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[2px] bg-primary" />
                            <span className="text-primary font-bold text-sm uppercase tracking-[0.5em] block">
                              Commercial Directive
                            </span>
                          </div>
                          <h3 className="font-serif text-5xl md:text-[5.5rem] font-bold text-white tracking-tighter leading-[0.85] mb-12">
                            {cargo.name}
                          </h3>

                          <p className="text-white/40 text-xl md:text-2xl leading-relaxed mb-16 font-light italic">
                            {cargo.description}
                          </p>

                          {/* Stats Row */}
                          <div className="grid grid-cols-3 gap-12 mb-16 border-y border-white/5 py-16">
                            {cargo.stats.map((stat, sIdx) => (
                              <div key={sIdx} className="space-y-4">
                                <div className="flex items-center gap-3 text-primary/70">
                                  <stat.icon className="w-4 h-4" />
                                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</span>
                                </div>
                                <StatCounter value={stat.value} className="text-white font-bold text-2xl md:text-3xl font-serif tracking-tighter text-glow" />
                              </div>
                            ))}
                          </div>

                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Action CTA */}
        <section className="py-48 border-t border-white/5 relative overflow-hidden bg-[#020617]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-5xl md:text-[8rem] font-bold text-premium text-glow mb-14 tracking-tighter leading-none">
              Scale Your <br /><span className="text-primary italic">Global Logistics</span>
            </h2>
            <p className="text-white/20 text-xl md:text-3xl mb-24 max-w-4xl mx-auto font-light leading-relaxed italic border-x border-white/10 px-16">
              Secure high-authority tonnage fixtures for your
              most critical industrial cargo requirements.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-8 px-20 py-8 bg-primary text-white rounded-full text-xl font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_80px_rgba(239,68,68,0.4)]"
            >
              <span className="relative z-10">Request Fixture</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
          </div>
        </section >
      </div >
    </Layout >
  );
};


export default Vessels;
