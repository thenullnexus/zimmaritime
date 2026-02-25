import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Ship, Anchor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import contactHeroImg from '@/assets/maritime-contact-dry-bulk.png';

const ContactInfoModule = ({ icon: Icon, title, content, index }: { icon: any, title: string, content: React.ReactNode, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative bg-[#ffffff]/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:bg-white/[0.04] h-full overflow-hidden"
  >
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 relative z-10">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 flex items-center justify-center rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-lg shadow-primary/5 flex-shrink-0">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="block text-[9px] md:text-[10px] font-bold text-primary/60 uppercase tracking-[0.4em] mb-1">Technical Info</span>
        <h4 className="font-serif text-lg md:text-xl font-bold text-white tracking-tight mb-2 break-words">{title}</h4>
        <div className="text-white/50 text-sm md:text-base leading-relaxed font-light italic break-words overflow-hidden">
          {content}
        </div>
      </div>
    </div>
    {/* Large watermark icon - absolute but constrained */}
    <div className="absolute -bottom-2 -right-2 opacity-[0.02] group-hover:opacity-10 transition-opacity pointer-events-none">
      <Icon className="w-16 h-16 md:w-20 md:h-20 text-white" />
    </div>
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
        {/* Cinematic Full-Screen Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={contactHeroImg}
              alt="Dry Bulk Vessel Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-60" />
          </div>

          <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
            {/* Form Card - Smaller and Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group/form shadow-[0_0_80px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Anchor className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
                    Secure <span className="text-primary uppercase italic">Tonnage</span>
                  </h2>
                  <p className="text-white/40 font-light italic text-base max-w-md mx-auto">
                    Deploy your requirements through our secure industrial channel.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/50 uppercase tracking-[0.3em] pl-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all rounded-xl placeholder:text-white/20 focus:bg-white/5 text-lg"
                        placeholder="IDENTIFY OPERATOR"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/50 uppercase tracking-[0.3em] pl-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all rounded-xl placeholder:text-white/20 focus:bg-white/5 text-lg"
                        placeholder="UPLINK @ COMPANY"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/50 uppercase tracking-[0.3em] pl-1">Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all rounded-xl placeholder:text-white/20 focus:bg-white/5 text-lg"
                        placeholder="CORPORATE ENTITY"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/50 uppercase tracking-[0.3em] pl-1">Department</label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all rounded-xl appearance-none focus:bg-white/5 text-lg"
                      >
                        <option value="" className="bg-[#020617]">SELECT SECTOR</option>
                        <option value="vessel-inquiry" className="bg-[#020617]">VESSEL ACQUISITION</option>
                        <option value="chartering" className="bg-[#020617]">DRY BULK CHARTERING</option>
                        <option value="cargo-quote" className="bg-[#020617]">CARGO LOGISTICS</option>
                        <option value="port-logistics" className="bg-[#020617]">PORT OPERATIONS</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 uppercase tracking-[0.3em] pl-1">Requirement Overview</label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all rounded-xl placeholder:text-white/20 resize-none focus:bg-white/5 text-lg"
                      placeholder="SPECIFY CARGO, ROUTE, AND DWT REQUIREMENTS..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group relative inline-flex items-center justify-center gap-6 px-10 py-5 bg-primary text-white rounded-xl text-sm font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(239,68,68,0.2)]"
                  >
                    <span className="relative z-10">Transmit Inquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Details</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </section>

        {/* Technical Info Grid */}
        <section className="py-32 relative bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ContactInfoModule
                icon={MapPin}
                title="Global HQ"
                content={
                  <div className="flex flex-col gap-1.5 not-italic">
                    <p className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      123 Marina Bay Road
                    </p>
                    <p className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      Chennai 600001
                    </p>
                    <p className="flex items-center gap-2 text-white/30 text-xs mt-1">
                      Tamil Nadu, India
                    </p>
                  </div>
                }
                index={0}
              />
              <ContactInfoModule
                icon={Phone}
                title="Direct Comms"
                content={
                  <div className="flex flex-col gap-2 not-italic">
                    <a href="tel:+914412345678" className="hover:text-primary transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      +91 44 1234 5678
                    </a>
                    <a href="tel:+914412345679" className="hover:text-primary transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      +91 44 1234 5679
                    </a>
                  </div>
                }
                index={1}
              />
              <ContactInfoModule
                icon={Mail}
                title="Digital Uplink"
                content={
                  <div className="flex flex-col gap-2 not-italic">
                    <a href="mailto:chartering@zimmaritime.com" className="hover:text-primary transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      chartering@zimmaritime.com
                    </a>
                    <a href="mailto:info@zimmaritime.com" className="hover:text-primary transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      info@zimmaritime.com
                    </a>
                  </div>
                }
                index={2}
              />
              <ContactInfoModule
                icon={Clock}
                title="Status"
                content={
                  <div className="leading-relaxed space-y-2 not-italic">
                    <span className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      Mon-Fri 09:00-18:00 IST
                    </span>
                    <span className="text-primary font-bold flex items-center gap-2 uppercase tracking-[0.2em] text-[10px]">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      24/7 Active Bridge
                    </span>
                  </div>
                }
                index={3}
              />
            </div>
          </div>
        </section>

        {/* Map Section - INDUSTRIAL GRAYSCALE */}
        <section className="h-[600px] relative border-t border-white/5 bg-[#020617]">
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
          <div className="absolute inset-0 pointer-events-none border-[20px] border-[#020617]" />
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
