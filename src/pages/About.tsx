import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Check, Target, Users, Award, Ship, Anchor, Globe, Scale, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCountUp } from '@/hooks/use-count-up';

// Images
import aboutHistoryImg from '@/assets/about/operational-dominance.png';
import aboutExpertiseImg from '@/assets/about/expertise.png';

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

const CoreValue = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="group relative h-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.05] transition-all duration-700"
  >
    <div className="absolute top-0 right-0 p-8 z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity">
      <Icon className="w-24 h-24 text-white" />
    </div>

    <div className="relative z-10 text-left">
      <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors mb-8 rounded-2xl">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wider mb-6 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-white/40 text-[15px] leading-relaxed font-light italic">
        {description}
      </p>
    </div>

    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
  </motion.div>
);

const About = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous coordination of tonnage and cargo requirements to ensure flawless operational execution.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building strategic alliances rooted in transparency, reliability, and collective success across the supply chain.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Upholding the highest standards of maritime professionalism and operational perfection in every fixture.'
    }
  ];

  return (
    <Layout>
      <div className="bg-[#020617] min-h-screen">
        {/* Cinematic Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/5 rounded-full blur-[180px]" />
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

              <h1 className="font-serif text-6xl md:text-8xl font-bold text-premium text-glow mb-14 leading-[0.85] tracking-tighter">
                Legacy of <br />
                <span className="text-white uppercase">Excellence</span>
              </h1>

              <p className="text-white/40 text-xl md:text-3xl leading-relaxed max-w-4xl font-light italic">
                Since 2012, ZIM Maritime has been the definitive bridge between global cargo demands and high-authority vessel operations.
              </p>
            </div>
          </div>
        </section>

        {/* History Showcase */}
        <section className="py-40 border-t border-white/5 relative overflow-hidden bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-40">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="relative group">
                  <div className="absolute -inset-8 bg-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-black/50">
                    <img src={aboutHistoryImg} alt="History" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-8 left-8">
                      <div className="bg-primary px-8 py-3 text-white font-black text-3xl italic skew-x-[-12deg] shadow-2xl">
                        EST. 2012
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="flex flex-col gap-4 mb-8">
                  <span className="text-primary font-bold text-sm uppercase tracking-[0.5em] flex items-center gap-2">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    Our Foundation
                  </span>
                  <h2 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                    A Decade of <br /><span className="text-white/20 italic">Operational Dominance</span>
                  </h2>
                </div>
                <div className="h-[2px] w-20 bg-primary mb-12" />
                <div className="space-y-10">
                  <p className="text-white/40 text-xl leading-relaxed font-light italic">
                    ZIM Maritime emerged as a specialized dry bulk brokering house with a single mission: to provide the highest level of operational oversight in the maritime industry.
                  </p>
                  <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
                    <div className="space-y-3">
                      <span className="block text-xs font-bold text-primary/40 uppercase tracking-[0.2em]">Growth Rate</span>
                      <StatCounter value="+400%" className="block text-white font-bold text-5xl font-serif tracking-tighter text-glow" />
                    </div>
                    <div className="space-y-3">
                      <span className="block text-xs font-bold text-primary/40 uppercase tracking-[0.2em]">Global Reach</span>
                      <span className="block text-white font-bold text-5xl font-serif tracking-tighter text-glow">Selective</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-40 border-t border-white/5 bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-32 flex flex-col items-start text-left">
              <div className="h-[2px] w-16 bg-primary mb-8" />
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-premium text-glow tracking-tighter">
                Fundamental <span className="text-primary uppercase">Directives</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {values.map((value, index) => (
                <CoreValue key={value.title} {...value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Showcase */}
        <section className="py-40 border-t border-white/5 relative overflow-hidden bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-20 lg:gap-40">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="relative group">
                  <div className="absolute -inset-8 bg-blue-600/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-black/50">
                    <img src={aboutExpertiseImg} alt="Expertise" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="flex flex-col gap-4 mb-8">
                  <span className="text-primary font-bold text-sm uppercase tracking-[0.5em] flex items-center gap-2">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    Industry Mastery
                  </span>
                  <h2 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                    Specialized in <br /><span className="text-white/20 italic">Dry Bulk Authority</span>
                  </h2>
                </div>
                <div className="h-[2px] w-20 bg-primary mb-12" />
                <ul className="space-y-8 mb-16">
                  {[
                    'Coal, Iron Ore, and Mineral Optimization',
                    'High-Yield Agricultural Grain Networks',
                    'Global Construction Material Logistics',
                    'Heavy-Lift Project Cargo Coordination'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-6 group">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary transition-all">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-white/50 text-xl font-light italic group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-12 pt-12 border-t border-white/5">
                  <div className="space-y-3">
                    <span className="block text-xs font-bold text-primary/40 uppercase tracking-widest">Vessels Fixed</span>
                    <StatCounter value="500+" className="block text-white font-bold text-4xl font-serif text-glow tracking-tighter" />
                  </div>
                  <div className="space-y-3">
                    <span className="block text-xs font-bold text-primary/40 uppercase tracking-widest">Ports Covered</span>
                    <StatCounter value="15+" className="block text-white font-bold text-4xl font-serif text-glow tracking-tighter" />
                  </div>
                  <div className="space-y-3">
                    <span className="block text-xs font-bold text-primary/40 uppercase tracking-widest">DWT Range</span>
                    <StatCounter value="60K" className="block text-white font-bold text-4xl font-serif text-glow tracking-tighter" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final Directive CTA */}
        <section className="py-48 border-t border-white/5 relative overflow-hidden bg-[#020617]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-5xl md:text-[7.5rem] font-bold text-premium text-glow mb-14 tracking-tighter leading-[0.85]">
              Built on <br /><span className="text-primary italic">Logistics Excellence</span>
            </h2>
            <p className="text-white/20 text-xl md:text-3xl mb-24 max-w-5xl mx-auto font-light leading-relaxed italic border-x border-white/10 px-16">
              Our operational background enables us to anticipate challenges, provide realistic timelines, and ensure flawless coordination between vessel operations and shore-side logistics.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="flex items-center gap-6 px-10 py-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-full group hover:bg-white/[0.05] transition-all">
                <Globe className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                <span className="text-white/60 text-sm font-bold uppercase tracking-[0.3em]">Global Network</span>
              </div>
              <div className="flex items-center gap-6 px-10 py-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-full group hover:bg-white/[0.05] transition-all">
                <Scale className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-white/60 text-sm font-bold uppercase tracking-[0.3em]">Metric Authority</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
