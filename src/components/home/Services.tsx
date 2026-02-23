import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Anchor,
  Ship,
  Handshake,
  Truck,
  Building2,
  Package,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Import Service Images
import vesselFixingImg from '../../assets/vessel-fixing.png';
import shipCharteringImg from '../../assets/cha-stevedoring.png';
import shipBrokeringImg from '../../assets/ship-brokering.png';
import portLogisticsImg from '../../assets/port-logistics.png';
import surfaceTransportationImg from '../../assets/surface-transportation.png';
import chaStevedoringImg from '../../assets/chs-steve.png';

const Services = () => {
  const services = [
    {
      icon: Anchor,
      title: 'Vessel Fixing',
      description: 'Expert vessel fixing services matching your cargo requirements with the ideal tonnage across our network.',
      link: '/services#vessel-fixing',
      color: 'from-blue-500/20 to-primary/20',
      image: vesselFixingImg
    },
    {
      icon: Ship,
      title: 'Ship Chartering',
      description: 'Comprehensive chartering solutions including voyage, time, and bareboat charters.',
      link: '/services#ship-chartering',
      color: 'from-primary/20 to-red-500/20',
      image: shipCharteringImg
    },
    {
      icon: Handshake,
      title: 'Ship Brokering',
      description: 'Professional brokering services connecting ship owners and charterers with market intelligence.',
      link: '/services#ship-brokering',
      color: 'from-red-500/20 to-orange-500/20',
      image: shipBrokeringImg
    },
    {
      icon: Building2,
      title: 'Port Logistics',
      description: 'End-to-end port logistics coordination for efficient cargo handling and operational excellence.',
      link: '/services#port-logistics',
      color: 'from-indigo-500/20 to-blue-500/20',
      image: portLogisticsImg
    },
    {
      icon: Truck,
      title: 'Surface Transportation',
      description: 'Seamless inland transportation connecting ports to final destinations across the subcontinent.',
      link: '/services#surface-transportation',
      color: 'from-emerald-500/20 to-teal-500/20',
      image: surfaceTransportationImg
    },
    {
      icon: Package,
      title: 'CHA & Stevedoring',
      description: 'Custom house agent services and professional stevedoring operations for efficient cargo handling.',
      link: '/services#cha-stevedoring',
      color: 'from-amber-500/20 to-orange-500/20',
      image: chaStevedoringImg
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-[#020617]">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse opacity-50" style={{ animationDelay: '2s' }} />

        {/* Technical Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-white/60 font-serif italic text-base tracking-widest uppercase">Expert Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl font-bold text-premium mb-8 leading-tight tracking-tighter"
          >
            Comprehensive <br />
            <span className="text-white">Maritime Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            From vessel fixing to strategic port logistics, we deliver
            unrivaled operational excellence across every link in the supply chain.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full"
            >
              {/* Card Body */}
              <div className="relative z-10 h-full flex flex-col bg-card/10 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-700">
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Icon Floating on Image */}
                  <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-20 flex flex-col p-10 pt-6 h-full">
                  {/* Hover Gradient Light */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`} />

                  <h3 className="font-serif text-2xl font-bold text-white mb-6 group-hover:text-premium transition-all duration-500">
                    {service.title}
                  </h3>

                  <p className="text-white/40 text-lg leading-relaxed mb-10 flex-grow group-hover:text-white/70 transition-colors duration-500 font-light">
                    {service.description}
                  </p>

                  <div className="flex items-center mt-auto">
                    <Link
                      to="/services"
                      className="group/btn relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-bold uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_rgba(1,78,34,0.3)] shadow-xl"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        View Details
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.6rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
