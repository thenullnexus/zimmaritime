import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Briefcase, Globe, AlertTriangle, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const TermSection = ({ icon: Icon, title, content, index }: { icon: any, title: string, content: React.ReactNode, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="group relative bg-[#0a0f1d] border border-white/5 p-10 rounded-sm hover:border-primary/40 transition-all duration-500"
    >
        <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors flex-shrink-0">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
                <span className="block text-xs font-black text-primary/40 uppercase tracking-[0.4em] mb-3">Article {index + 1}</span>
                <h4 className="font-sans text-2xl font-black text-white uppercase tracking-wider mb-4">{title}</h4>
                <div className="text-white/50 text-lg leading-relaxed font-light italic">
                    {content}
                </div>
            </div>
        </div>
        <div className="absolute top-0 right-0 w-[1px] h-0 bg-primary group-hover:h-full transition-all duration-500" />
    </motion.div>
);

const Terms = () => {
    return (
        <Layout>
            <div className="bg-[#020617] min-h-screen">
                {/* Industrial Header */}
                <section className="relative pt-44 pb-32 overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="font-serif text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8">
                                Service <span className="text-primary uppercase italic">Terms</span>
                            </h1>
                            <p className="text-white/40 font-light italic text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                                Defining the legal framework for international maritime logistics and vessel chartering operations.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* content Section */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            <TermSection
                                icon={Scale}
                                title="Operational Authority"
                                content={
                                    <p>
                                        All vessel acquisition and chartering requests submitted through ZIM Maritime are subject to immediate operational review. The group retains the authority to prioritize inquiries based on strategic alignment and asset availability.
                                    </p>
                                }
                                index={0}
                            />
                            <TermSection
                                icon={Briefcase}
                                title="Chartering Engagement"
                                content={
                                    <p>
                                        Engagements are executed following Standard Professional Chartering Protocols. All terms are subject to the specific BIMCO or ASBA contract clauses applicable to the vessel type and cargo classification.
                                    </p>
                                }
                                index={1}
                            />
                            <TermSection
                                icon={Globe}
                                title="Geospatial Jurisdiction"
                                content={
                                    <p>
                                        Service terms are governed by International Maritime Law and the jurisdictional regulations of the Port of Chennai, India, unless otherwise specified in the definitive chartering agreement.
                                    </p>
                                }
                                index={2}
                            />
                            <TermSection
                                icon={AlertTriangle}
                                title="Liability Limitation"
                                content={
                                    <p>
                                        ZIM Maritime Industrial Group acts as a strategic intermediary and operator. Liability for cargo loss or operational delays is limited by the terms of the Bill of Lading and standard maritime insurance coverage.
                                    </p>
                                }
                                index={3}
                            />
                        </div>

                        {/* Legal Link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-24 text-center"
                        >
                            <p className="text-white/20 text-sm font-bold uppercase tracking-[0.5em] mb-8">Legal Department Correspondence</p>
                            <a
                                href="mailto:legal@zimmaritime.com"
                                className="inline-flex items-center gap-4 px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full hover:bg-primary hover:border-primary transition-all group"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest">legal@zimmaritime.com</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Terms;
