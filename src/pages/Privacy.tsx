import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const PolicySection = ({ icon: Icon, title, content, index }: { icon: any, title: string, content: React.ReactNode, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="group relative bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm hover:border-primary/40 transition-all duration-500"
    >
        <div className="flex items-start gap-6 md:gap-10">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors flex-shrink-0">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div>
                <span className="block text-[10px] md:text-xs font-black text-primary/40 uppercase tracking-[0.4em] mb-3">Protocol {index + 1}</span>
                <h4 className="font-sans text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-4">{title}</h4>
                <div className="text-white/50 text-base md:text-lg leading-relaxed font-light italic">
                    {content}
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
);

const Privacy = () => {
    return (
        <Layout>
            <div className="bg-[#020617] min-h-screen">
                {/* Cinematic Header */}
                <section className="relative pt-44 pb-24 overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 z-0 opacity-20 capitalize">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:30px_30px]" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                                Privacy <span className="text-primary uppercase italic">Protocols</span>
                            </h1>
                            <p className="text-white/40 font-light italic text-xl md:text-2xl leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-8 ml-2">
                                Securing operational intelligence and partner data through enterprise-grade encryption and maritime-standard compliance.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 max-w-5xl mx-auto">
                            <PolicySection
                                icon={Shield}
                                title="Data Integrity"
                                content={
                                    <p>
                                        ZIM Maritime Industrial Group ensures the highest level of integrity for all transmitted data. We employ sophisticated filtration and encryption systems to prevent unauthorized access to sensitive vessel acquisition and logistical data.
                                    </p>
                                }
                                index={0}
                            />
                            <PolicySection
                                icon={Lock}
                                title="Strategic Security"
                                content={
                                    <p>
                                        All strategic inquiries and cargo requirements are treated as classified industrial intelligence. We do not share operational data with third-party entities without explicit clearance from the designated operator.
                                    </p>
                                }
                                index={1}
                            />
                            <PolicySection
                                icon={Eye}
                                title="Transparent Monitoring"
                                content={
                                    <p>
                                        Our digital uplink channels are monitored to ensure service availability and optimal route performance. We collect standard technical metadata necessary for maintaining global system uptime and operational readiness.
                                    </p>
                                }
                                index={2}
                            />
                            <PolicySection
                                icon={FileText}
                                title="Compliance Standards"
                                content={
                                    <p>
                                        Operators have the right to request a full audit of their stored operational data. ZIM Maritime complies with international maritime data protection regulations and standard industrial privacy frameworks.
                                    </p>
                                }
                                index={3}
                            />
                        </div>

                        {/* Contact Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-24 text-center border-t border-white/5 pt-16"
                        >
                            <p className="text-white/20 text-sm font-bold uppercase tracking-[0.5em] mb-8">Data Protection Officer</p>
                            <a
                                href="mailto:security@zimmaritime.com"
                                className="inline-flex items-center gap-4 px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full hover:bg-primary hover:border-primary transition-all group"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest">security@zimmaritime.com</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Privacy;
