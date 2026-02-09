import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ship, Globe, Award, Headphones, Box, ArrowRight, Check } from 'lucide-react';
import { useCountUp } from '../../hooks/use-count-up';
import dryCargoImg from '../../assets/dry_cargo1.png';

const StatCard = ({ stat, index }: { stat: any, index: number }) => {
    const { count, ref } = useCountUp(parseInt(stat.value.replace(/[^0-9]/g, '')), 2000);
    const Icon = stat.icon;

    const isLarge = index === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group overflow-hidden bg-card/10 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 ${isLarge ? 'md:col-span-2 md:row-span-2' : ''
                }`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white/90 mb-2">
                        {stat.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                        {stat.description}
                    </p>
                </div>

                <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        {count}{stat.value.includes('+') ? '+' : ''}
                    </span>
                    <span className="text-sm font-medium text-primary uppercase tracking-widest">
                        {stat.unit}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const Introduction = () => {
    const stats = [
        {
            icon: Ship,
            title: 'Vessel Expertise',
            value: '60,000',
            unit: 'DWT',
            description: 'Specialized in dry bulk carriers and strategic management',
        },
        {
            icon: Globe,
            title: 'Global Reach',
            value: '12+',
            unit: 'Hubs',
            description: 'Strategic presence across Indian subcontinent',
        },
        {
            icon: Award,
            title: 'Trusted Partner',
            value: '14',
            unit: 'Years',
            description: 'Delivering maritime excellence since 2012',
        },
        {
            icon: Headphones,
            title: '24/7 Operations',
            value: '24/7',
            unit: 'Support',
            description: 'Round-the-clock assistance for global trade',
        },
    ];

    return (
        <section className="section-padding relative overflow-hidden bg-[#020617]">
            {/* Background Layering */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-1/2 h-1/2 bg-primary/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-5%] w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
                    {/* Content side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-7/12 relative"
                    >

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-[1px] w-12 bg-primary/50" />
                            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">About ZIM Maritime</span>
                        </motion.div>

                        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 leading-[0.9] tracking-tighter">
                            Your Premier <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-premium">
                                    Maritime Partner
                                </span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 1.5, delay: 0.8 }}
                                    className="absolute bottom-2 left-0 h-1 bg-primary/30 blur-sm"
                                />
                            </span>
                        </h2>

                        <p className="text-white/40 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl font-light">
                            At ZIM Maritime, we define the future of ship brokering.
                            With nearly <span className="text-white font-medium">14 years</span> of unwavering commitment,
                            we harmonize global trade by connecting cargo potential with
                            world-class tonnage.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link
                                to="/services"
                                className="group relative px-10 py-5 bg-primary text-white rounded-full font-bold overflow-hidden transition-all hover:pr-14"
                            >
                                <span className="relative z-10">Explore Services</span>
                                <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-10 py-5 bg-transparent text-white border border-white/20 rounded-full font-bold hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-xl"
                            >
                                Connect With Us
                            </Link>
                        </div>
                    </motion.div>

                    {/* Bento Stats side */}
                    <div className="lg:w-5/12 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <StatCard key={index} stat={stat} index={index} />
                        ))}
                    </div>
                </div>

                {/* Highlight Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-white/10"
                >
                    <div className="absolute inset-0">
                        <img
                            src={dryCargoImg}
                            alt="Dry Cargo Vessel"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                    </div>

                    <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-3xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                                <Box className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Vessel Expertise Spotlight</span>
                        </div>

                        <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Strategic Management for <br />
                            <span className="text-primary italic">Dry Bulk</span> Commodities
                        </h3>

                        <p className="text-white/70 text-xl leading-relaxed mb-12">
                            From Limestone and Gypsum to Minerals, our team ensures
                            efficient logistics through a vast network of Self-Propelled
                            Barges and Mini Bulk Carriers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 py-8 border-t border-white/10">
                            <div className="flex-1">
                                <div className="text-3xl font-bold text-white mb-2">2,000 - 4,000</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.3em]">DWT Capabilities</div>
                            </div>
                            <div className="hidden sm:block w-[1px] bg-white/10" />
                            <div className="flex-1">
                                <div className="text-3xl font-bold text-white mb-2">Global</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.3em]">Operational Reach</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduction;
