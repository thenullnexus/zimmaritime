import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Ship, Anchor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const ContactInfoModule = ({ icon: Icon, title, content, index }: { icon: any, title: string, content: React.ReactNode, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative bg-white/[0.02] border border-white/5 p-10 rounded-sm hover:border-primary/40 transition-all duration-500"
  >
    <div className="flex items-start gap-8">
      <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <span className="block text-xs font-black text-primary/40 uppercase tracking-[0.4em] mb-3">Technical Info</span>
        <h4 className="font-sans text-2xl font-black text-white uppercase tracking-wider mb-3">{title}</h4>
        <div className="text-white/50 text-lg leading-relaxed font-light italic">
          {content}
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Strategic inquiry received. Our operational desk will respond within 24 hours.');
  };

  return (
    <Layout>
      <div className="bg-[#020617] min-h-screen">
        {/* Cinematic Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/5 rounded-full blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        {/* Main Contact Content */}
        <section className="pt-44 pb-32 border-t border-white/5 relative bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Contact Info Modules */}
              <div className="lg:col-span-1 space-y-8">
                <ContactInfoModule
                  icon={MapPin}
                  title="Global HQ"
                  content={
                    <p>
                      123 Marina Bay Road,<br />
                      Chennai 600001,<br />
                      Tamil Nadu, India
                    </p>
                  }
                  index={0}
                />
                <ContactInfoModule
                  icon={Phone}
                  title="Direct Comms"
                  content={
                    <p className="flex flex-col gap-3">
                      <a href="tel:+914412345678" className="hover:text-primary transition-colors flex items-center gap-3">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        +91 44 1234 5678
                      </a>
                      <a href="tel:+914412345679" className="hover:text-primary transition-colors flex items-center gap-3">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        +91 44 1234 5679
                      </a>
                    </p>
                  }
                  index={1}
                />
                <ContactInfoModule
                  icon={Mail}
                  title="Digital Uplink"
                  content={
                    <p className="flex flex-col gap-3">
                      <a href="mailto:chartering@zimmaritime.com" className="hover:text-primary transition-colors flex items-center gap-3">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        chartering@zimmaritime.com
                      </a>
                      <a href="mailto:info@zimmaritime.com" className="hover:text-primary transition-colors flex items-center gap-3">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        info@zimmaritime.com
                      </a>
                    </p>
                  }
                  index={2}
                />
                <ContactInfoModule
                  icon={Clock}
                  title="Status"
                  content={
                    <p className="leading-relaxed space-y-4">
                      <span>Standard Ops: Mon-Fri 09:00-18:00 IST</span>
                      <span className="text-primary font-bold flex items-center gap-4 uppercase tracking-[0.2em] text-base mt-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                        24/7 Chartering Desk Active
                      </span>
                    </p>
                  }
                  index={3}
                />
              </div>

              {/* Inquery Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-16 rounded-[2.5rem] relative overflow-hidden group/form shadow-2xl">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <Anchor className="w-48 h-48 text-white" />
                  </div>

                  <div className="relative z-10 text-left">
                    <div className="flex flex-col gap-4 mb-12">
                      <h2 className="font-serif text-5xl font-bold text-white tracking-tighter">
                        Secure <span className="text-primary uppercase italic">Tonnage</span>
                      </h2>
                      <p className="text-white/30 font-light italic text-lg max-w-xl">
                        Deploy your cargo requirements through our secure industrial channel. All inquiries are processed with enterprise-grade priority.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-xs font-bold text-primary/60 uppercase tracking-[0.3em] pl-1">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10 focus:bg-white/[0.05]"
                            placeholder="IDENTIFY OPERATOR"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-xs font-bold text-primary/60 uppercase tracking-[0.3em] pl-1">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10 focus:bg-white/[0.05]"
                            placeholder="UPLINK @ COMPANY"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-xs font-bold text-primary/60 uppercase tracking-[0.3em] pl-1">Organization</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10 focus:bg-white/[0.05]"
                            placeholder="CORPORATE ENTITY"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-xs font-bold text-primary/60 uppercase tracking-[0.3em] pl-1">Department</label>
                          <select
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl appearance-none focus:bg-white/[0.05]"
                          >
                            <option value="" className="bg-[#020617]">SELECT SECTOR</option>
                            <option value="vessel-inquiry" className="bg-[#020617]">VESSEL ACQUISITION</option>
                            <option value="chartering" className="bg-[#020617]">DRY BULK CHARTERING</option>
                            <option value="cargo-quote" className="bg-[#020617]">CARGO LOGISTICS</option>
                            <option value="port-logistics" className="bg-[#020617]">PORT OPERATIONS</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-bold text-primary/60 uppercase tracking-[0.3em] pl-1">Requirement Overview</label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 text-white focus:outline-none focus:border-primary transition-all rounded-2xl placeholder:text-white/10 resize-none focus:bg-white/[0.05]"
                          placeholder="SPECIFY CARGO, ROUTE, AND DWT REQUIREMENTS..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="group relative inline-flex items-center gap-8 px-16 py-6 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_50px_rgba(239,68,68,0.3)]"
                      >
                        <span className="relative z-10">Transmit Inquiry</span>
                        <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - INDUSTRIAL GRAYSCALE */}
        <section className="h-[700px] relative border-y border-white/5 bg-[#020617]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62191.088540645556!2d80.26639795!3d13.03929805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Marina%20Bay%20Road%2C%20Chennai%20600001%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1771858418476!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ZIM Maritime Operations Center"
          />
          <div className="absolute inset-0 pointer-events-none border-[30px] border-[#020617]" />
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
