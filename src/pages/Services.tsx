import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Anchor,
  ArrowRight,
  Check,
  Ship,
  Handshake,
  Building2,
  Truck,
  Package,
  Sparkles
} from 'lucide-react';

import vesselFixingImg from '@/assets/vessel-fixing.png';
import shipCharteringImg from '@/assets/cha-stevedoring.png';
import shipBrokeringImg from '@/assets/ship-brokering.png';
import portLogisticsImg from '@/assets/port-logistics.png';
import surfaceTransportationImg from '@/assets/surface-transportation.png';
import chaStevedoringImg from '@/assets/chs-steve.png';

const servicesData = [
  {
    id: 'vessel-fixing',
    title: 'Vessel Fixing',
    description: 'Expert vessel fixing services matching your cargo requirements with the ideal tonnage. We connect you with the right vessels across our extensive global network.',
    icon: Anchor,
    image: vesselFixingImg,
    color: 'primary',
    glowColor: 'rgba(1, 78, 34, 0.15)',
    features: [
      'Access to extensive owner network',
      'Quick response times for urgent requirements',
      'Market intelligence and rate guidance',
      'Vessel vetting and due diligence',
      'Negotiation support throughout the process',
    ]
  },
  {
    id: 'ship-chartering',
    title: 'Ship Chartering',
    description: 'Comprehensive chartering solutions including voyage, time, and bareboat charters. Tailored to your specific operational needs.',
    icon: Ship,
    image: shipCharteringImg,
    color: 'blue-500',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    features: [
      'Voyage charter arrangements',
      'Time charter fixtures',
      'Bareboat charter negotiations',
      'Contract of Affreightment (COA)',
      'Charter party review and advice',
    ]
  },
  {
    id: 'ship-brokering',
    title: 'Ship Brokering',
    description: 'Professional brokering services connecting ship owners and charterers. We leverage deep market intelligence to secure the best fixtures.',
    icon: Handshake,
    image: shipBrokeringImg,
    color: 'red-500',
    glowColor: 'rgba(239, 68, 68, 0.15)',
    features: [
      'Comprehensive market analysis',
      'Owner and charterer matching',
      'Rate negotiations',
      'Post-fixture support',
      'Claims handling assistance',
    ]
  },
  {
    id: 'port-logistics',
    title: 'Port Logistics',
    description: 'End-to-end port logistics coordination for efficient cargo handling. Ensuring smooth operations at every touchpoint.',
    icon: Building2,
    image: portLogisticsImg,
    color: 'indigo-500',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    features: [
      'Berth planning and coordination',
      'Cargo handling supervision',
      'Documentation support',
      'Agent coordination',
      'Real-time cargo tracking',
    ]
  },
  {
    id: 'surface-transportation',
    title: 'Surface Transport',
    description: 'Seamless inland transportation connecting ports to final destinations. Reliable multi-modal solutions across the subcontinent.',
    icon: Truck,
    image: surfaceTransportationImg,
    color: 'emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    features: [
      'Road and rail transportation',
      'Multi-modal solutions',
      'Door-to-door delivery',
      'Fleet management',
      'GPS tracking and monitoring',
    ]
  },
  {
    id: 'cha-stevedoring',
    title: 'CHA & Stevedoring',
    description: 'Custom house agent services and professional stevedoring operations. Expert handling of regulatory compliance and cargo movement.',
    icon: Package,
    image: chaStevedoringImg,
    color: 'amber-500',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    features: [
      'Customs clearance assistance',
      'Import/export documentation',
      'Stevedoring coordination',
      'Cargo inspection',
      'Warehousing support',
    ]
  }
];

const FeatureItem = ({ feature, index, scrollProgress }: { feature: string, index: number, scrollProgress: any }) => {
  const delay = index * 0.1;
  const opacity = useTransform(scrollProgress, [delay, Math.min(delay + 0.3, 1)], [0, 1]);
  const y = useTransform(scrollProgress, [delay, Math.min(delay + 0.3, 1)], [20, 0]);

  return (
    <motion.li
      className="flex items-center gap-4"
      style={{ opacity, y }}
    >
      <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
        <Check className="w-2.5 h-2.5 text-primary" />
      </div>
      <span className="text-white/70 text-sm sm:text-base font-light group-hover:text-white transition-colors duration-300">
        {feature}
      </span>
    </motion.li>
  );
};

const ParallaxServiceSection = ({ service, isMobile }: { service: any, isMobile: boolean }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Sequenced Animation Logic
  // 1. Heading entry: 0.0 -> 0.3
  const headingStep = useTransform(smoothProgress, [0, 0.25], [0, 1]);
  const headingEntryX = useTransform(smoothProgress, [0, 0.3], [-100, 0]);
  const headingEntryY = useTransform(smoothProgress, [0, 0.3], [20, 0]);
  const headingOpacity = headingStep;

  // 2. Image entry: 0.05 -> 0.35
  const imageStep = useTransform(smoothProgress, [0.05, 0.35], [0, 1]);
  const imageEntryX = useTransform(smoothProgress, [0.05, 0.35], [100, 0]);

  // 3. Content entry: 0.1 -> 0.4
  const contentStep = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);
  const contentEntryX = useTransform(smoothProgress, [0.1, 0.4], [-100, 0]);

  // Background Depth effects
  const bgMarkerSpeed = useTransform(smoothProgress, [0, 1], [0, 100]);
  const glowPulse = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]);

  const Icon = service.icon;

  // Pre-calculate motion values for both layouts to avoid hook violation
  const mobileImageY = useTransform(smoothProgress, [0.1, 0.4], [40, 0]);
  const desktopImageX = useTransform(imageEntryX, x => `${x}%`);
  const desktopContentX = useTransform(contentEntryX, (x: any) => `${x}vw`);
  const desktopHeadingBgOpacity = useTransform(headingOpacity, (o: any) => 0.03 + (Number(o) * 0.05));
  const desktopHeadingBgY = useTransform(headingEntryY, (y: any) => `${y}vh`);
  const desktopHeadingBgX = useTransform(headingEntryX, (x: any) => `${x}vw`);
  const desktopQuoteOpacity = useTransform(contentStep, [0.6, 1], [0, 1]);
  const desktopQuoteY = useTransform(contentStep, [0.6, 1], [20, 0]);

  // Mobile-specific transformations moved to top level
  const mobileHeadingOpacity = useTransform(headingOpacity, (o: any) => Number(o) * 0.12);
  const mobileHeadingY = useTransform(headingEntryY, (y: any) => `${y}px`);

  return (
    <div id={service.id} ref={sectionRef} className="relative bg-[#020617] will-change-transform" style={{ height: isMobile ? '120vh' : '180vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden will-change-contents">
        {/* Cinematic Background Layering */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full blur-[160px]"
            style={{
              backgroundColor: service.glowColor,
              opacity: glowPulse
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

          {/* Static Technical Markers with Depth */}
          <motion.div style={{ y: bgMarkerSpeed }} className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-[1px] bg-white/10" />
            <div className="absolute top-10 left-10 w-[1px] h-20 bg-white/10" />
            <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-white/10" />
            <div className="absolute bottom-10 right-10 w-[1px] h-20 bg-white/10" />
          </motion.div>
        </div>

        <motion.div
          className="relative w-full h-full"
        >
          {/* MOBILE LAYOUT: Stacked vertically */}
          {isMobile ? (
            <div className="flex flex-col h-full pt-8 px-4 relative">
              {/* Background Title for Mobile - Enhanced Visibility */}
              <motion.div
                className="absolute inset-0 flex items-start justify-center pt-20 pointer-events-none z-0"
                style={{
                  opacity: mobileHeadingOpacity,
                  y: mobileHeadingY,
                }}
              >
                <h2 className="font-serif font-black uppercase tracking-tighter text-white text-[18vw] text-center leading-[0.8] opacity-60">
                  {service.title}
                </h2>
              </motion.div>

              {/* Mobile Image - Optimized Size */}
              <motion.div
                className="relative z-10 flex-shrink-0 flex items-center justify-center mb-4 pt-4"
                style={{
                  opacity: imageStep,
                  y: mobileImageY,
                }}
              >
                <div className="w-44 aspect-square rounded-[2rem] overflow-hidden drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain bg-black/40"
                  />
                  {/* Glass highlight on image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </motion.div>

              {/* Mobile Content Card - Enhanced Premium Feel */}
              <motion.div
                className="relative z-20 pointer-events-auto"
                style={{ opacity: contentStep }}
              >
                <div
                  className="bg-[#0a0f1e]/40 backdrop-blur-[60px] border border-white/20 py-4 px-6 rounded-[2rem] shadow-2xl relative overflow-hidden mx-auto max-w-md w-[calc(100vw-2rem)]"
                  style={{
                    boxShadow: `0 25px 60px -15px rgba(0,0,0,0.8), 0 0 30px -10px ${service.glowColor}, inset 0 0 30px rgba(255,255,255,0.03)`
                  }}
                >
                  {/* Card overlays */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-50 pointer-events-none" />

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/40 shadow-xl flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primary font-bold uppercase tracking-[0.25em] text-[10px] flex items-center gap-2 mb-0.5">
                        <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                        Premium Solutions
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white leading-tight tracking-tight text-balance">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/90 text-sm mb-3 leading-relaxed font-light italic">
                    {service.description}
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-primary/60 via-white/20 to-transparent mb-3 opacity-50" />

                  <ul className="grid grid-cols-1 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-white/80 text-[13px] font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-white rounded-full text-xs font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 w-full justify-center"
                  >
                    <span className="relative z-10">Request Strategic Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Link>
                </div>
              </motion.div>
            </div>
          ) : (
            /* DESKTOP LAYOUT: Side-by-Side Landscape Card */
            <>
              {/* Image Segment (Right Side) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-end pr-10 xl:pr-20 pointer-events-none"
                style={{
                  x: desktopImageX,
                  zIndex: 30
                }}
              >
                <div className="relative group/img flex items-center justify-center">
                  <div className="w-[28vw] aspect-[16/10] rounded-3xl overflow-hidden drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)] border border-white/5 bg-[#0a0f1e]/40 backdrop-blur-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>
                </div>
              </motion.div>

              {/* Content Segment (Left Side) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-start pointer-events-none z-40"
                style={{
                  paddingLeft: '8vw',
                  x: desktopContentX,
                }}
              >
                <div className="flex flex-col items-start text-left w-full max-w-4xl">
                  {/* Background Title Overlay */}
                  <motion.h2
                    className="font-serif font-black uppercase tracking-tighter text-white select-none pointer-events-none mb-6"
                    style={{
                      fontSize: 'clamp(3rem, 7vw, 9.5rem)',
                      lineHeight: '0.8',
                      opacity: desktopHeadingBgOpacity,
                      textShadow: '0 0 100px rgba(1, 78, 34, 0.4)',
                      y: desktopHeadingBgY,
                      x: desktopHeadingBgX,
                      transformOrigin: 'left center',
                      willChange: 'transform, opacity',
                    }}
                  >
                    {service.title}
                  </motion.h2>

                  {/* Landscape Card: 2-Column internal layout */}
                  <motion.div
                    className="flex flex-col pointer-events-auto bg-white/[0.02] backdrop-blur-[50px] border border-white/10 py-7 px-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group/card"
                    style={{
                      opacity: contentStep,
                      boxShadow: `0 40px 120px -20px rgba(0,0,0,0.6), 0 0 50px -12px ${service.glowColor}, inset 0 0 20px rgba(255,255,255,0.02)`,
                      willChange: 'transform, opacity',
                    }}
                  >
                    {/* Subtle Technical Grid on Card */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                      <div className="absolute top-2 right-2 w-10 h-[1px] bg-primary/30" />
                      <div className="absolute top-2 right-2 w-[1px] h-10 bg-primary/30" />
                    </div>

                    <div className="flex flex-col xl:flex-row gap-10 items-center">
                      {/* Left: Icon + Description */}
                      <div className="flex-1 flex flex-col items-start text-left max-w-xl">
                        <div className="flex items-center gap-5 mb-5">
                          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg shrink-0">
                            <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
                              <Sparkles className="w-3 h-3 animate-pulse" />
                              Premium Strategy
                            </span>
                            <span className="text-white font-serif italic text-base opacity-60">Global Integrity</span>
                          </div>
                        </div>

                        <p className="text-white/80 text-lg leading-relaxed font-light italic mb-8">
                          {service.description}
                        </p>

                        <motion.div style={{ opacity: desktopQuoteOpacity, y: desktopQuoteY }}>
                          <Link
                            to="/contact"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-full text-sm font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 shadow-xl shadow-primary/20"
                          >
                            <span className="relative z-10">Request Strategic Quote</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          </Link>
                        </motion.div>
                      </div>

                      {/* Right: Features Grid */}
                      <div className="w-full xl:w-[340px] bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                        <h4 className="text-[11px] text-primary/60 font-black uppercase tracking-[0.4em] mb-5">Tactical Benefits</h4>
                        <ul className="grid grid-cols-1 gap-4">
                          {service.features.map((feature: string, idx: number) => (
                            <FeatureItem
                              key={idx}
                              feature={feature}
                              index={idx}
                              scrollProgress={contentStep}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/5 rounded-full blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-16 bg-primary" />
              <p className="text-primary font-bold uppercase tracking-[0.5em] text-sm">Our Enterprise Solutions</p>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-8xl font-bold text-premium text-glow mb-6 md:mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter">
              World-Class <br />
              <span className="text-white">Maritime Logistics</span>
            </h1>

            <p className="text-white/40 text-xl md:text-3xl leading-relaxed max-w-2xl font-light italic">
              At ZIM Maritime, we harmonize the complexities of global trade,
              connecting potentials through strategic excellence and deep operational expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Parallax Sections */}
      {servicesData.map((service) => (
        <ParallaxServiceSection key={service.id} service={service} isMobile={isMobile} />
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-[#020617] relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-premium mb-8 text-glow tracking-tighter">
            Chart Your Course with ZIM
          </h2>
          <p className="text-white/40 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to elevate your supply chain? Connect with our strategic advisory team
            to discuss your bespoke maritime requirements.
          </p>
          <Link
            to="/contact"
            className="group relative px-12 py-6 bg-white text-secondary rounded-full font-bold transition-all hover:scale-105 shadow-2xl flex items-center justify-center mx-auto w-fit gap-3"
          >
            Contact Our Strategy Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
