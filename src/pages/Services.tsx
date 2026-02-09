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

// Import Service Images (Localized Assets)
import vesselFixingImg from '@/assets/vessel-fixing.png';
import shipCharteringImg from '@/assets/ship-chartering.png';
import shipBrokeringImg from '@/assets/ship-brokering.png';
import portLogisticsImg from '@/assets/port-logistics.png';
import surfaceTransportationImg from '@/assets/surface-transportation.png';
import chaStevedoringImg from '@/assets/cha-stevedoring.png';

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
    title: 'Surface Transportation',
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
      <span className="text-white/70 text-xs sm:text-base font-light group-hover:text-white transition-colors duration-300">
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
  // 1. Heading entry: 0.0 -> 0.2
  const headingStep = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const headingScale = useTransform(smoothProgress, [0, 0.2], [0.5, 1.0]);
  const headingOpacity = headingStep;
  const headingEntryY = useTransform(smoothProgress, [0, 0.2], [50, 0]);

  // 2. Image entry: 0.1 -> 0.4
  const imageStep = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);
  const imageEntryX = useTransform(smoothProgress, [0.1, 0.4], [100, 0]);

  // 3. Content entry: 0.3 -> 0.6
  const contentStep = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);
  const contentEntryX = useTransform(smoothProgress, [0.3, 0.6], [-100, 0]);

  // Exit animation (starts at 0.85, ends at 1.0)
  const exitOpacity = useTransform(smoothProgress, [0.85, 1], [1, 0]);
  const exitY = useTransform(smoothProgress, [0.85, 1], [0, -100]);

  // Background Depth effects
  const bgMarkerSpeed = useTransform(smoothProgress, [0, 1], [0, 100]);
  const glowPulse = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]);

  const Icon = service.icon;

  return (
    <div ref={sectionRef} className="relative bg-[#020617]" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Cinematic Background Layering */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px]"
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
          style={{
            opacity: exitOpacity,
            y: exitY
          }}
        >
          {/* Image Component */}
          <motion.div
            className="absolute inset-0 flex items-center justify-end pr-8 sm:pr-20 pointer-events-none"
            style={{
              x: useTransform(imageEntryX, x => `${x}%`),
              zIndex: 30
            }}
          >
            <div className="relative group/img h-full flex items-center justify-center rounded-[50px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-[90vw] sm:w-[75vw] md:w-[45vw] h-auto max-h-[35vh] md:max-h-[55vh] object-contain opacity-95 transition-transform duration-700 group-hover/img:scale-110 drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              />
              {/* Image Technical Details (Placeholder Specs) */}
              <div className="absolute bottom-4 right-4 flex flex-col items-end opacity-20 group-hover/img:opacity-40 transition-opacity">
                <span className="text-[10px] text-white font-mono uppercase tracking-[0.2em]">Scale: 1:500</span>
                <span className="text-[10px] text-white font-mono uppercase tracking-[0.2em]">Coord: 44.2°N 12.3°E</span>
              </div>
              {/* Technical Overlay under Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Heading and Content */}
          <motion.div
            className="absolute inset-0 flex items-center justify-start pointer-events-none z-40"
            style={{
              paddingLeft: isMobile ? '0' : '8vw',
              x: useTransform(contentEntryX, x => `${x}vw`),
            }}
          >
            <div className="flex flex-col items-center sm:items-start px-0 sm:px-12 text-center sm:text-left">
              <motion.h2
                className="font-serif font-black uppercase tracking-tighter whitespace-nowrap text-white select-none pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
                style={{
                  fontSize: isMobile ? 'clamp(1rem, 6vw, 2rem)' : 'clamp(2.5rem, 10vw, 15rem)',
                  lineHeight: '0.8',
                  opacity: useTransform(headingOpacity, o => 0.03 + (o * 0.05)),
                  textShadow: '0 0 120px rgba(1, 78, 34, 0.4)',
                  y: useTransform(headingEntryY, y => `${y}vh`),
                  scale: headingScale,
                  transformOrigin: 'center center',
                  filter: useTransform(headingOpacity, o => `blur(${Math.max(0, (1 - o) * 20)}px)`),
                }}
              >
                {service.title}
              </motion.h2>

              <motion.div
                className="mt-6 sm:mt-8 max-w-[90vw] sm:max-w-xl flex flex-col items-center sm:items-start text-center sm:text-left pointer-events-auto bg-white/[0.02] backdrop-blur-[50px] border border-white/10 py-6 sm:py-8 px-6 sm:px-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group/card"
                style={{
                  opacity: contentStep,
                  boxShadow: `0 40px 120px -20px rgba(0,0,0,0.6), 0 0 50px -12px ${service.glowColor}, inset 0 0 20px rgba(255,255,255,0.02)`
                }}
              >
                {/* Subtle Technical Grid on Card */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Grain/Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                {/* Subtle Card Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                  <div className="absolute top-2 right-2 w-10 h-[1px] bg-primary/30" />
                  <div className="absolute top-2 right-2 w-[1px] h-10 bg-primary/30" />
                </div>
                <div className="flex flex-col items-center sm:items-start gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg group">
                    <Icon className={`w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-1 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      Premium Logistics
                    </span>
                    <span className="text-white font-serif italic text-base opacity-80">Strategic Excellence</span>
                  </div>
                </div>

                <p className="text-white/80 text-lg sm:text-xl mb-6 leading-relaxed font-light italic relative">
                  {service.description}
                </p>

                <div className="w-full h-[1px] bg-gradient-to-r from-primary/40 via-white/10 to-transparent mb-7" />

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 w-full max-w-md mx-auto sm:mx-0">
                  {service.features.map((feature: string, idx: number) => (
                    <FeatureItem
                      key={idx}
                      feature={feature}
                      index={idx}
                      scrollProgress={contentStep}
                    />
                  ))}
                </ul>

                <motion.div style={{
                  opacity: useTransform(contentStep, [0.6, 1], [0, 1]),
                  y: useTransform(contentStep, [0.6, 1], [20, 0]),
                }}>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-full text-sm font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 shadow-xl shadow-primary/20"
                  >
                    <span className="relative z-10">Request Strategic Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
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
              <p className="text-primary font-bold uppercase tracking-[0.5em] text-xs">Our Enterprise Solutions</p>
            </motion.div>

            <h1 className="font-serif text-6xl md:text-8xl font-bold text-premium text-glow mb-10 leading-[0.85] tracking-tighter">
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
