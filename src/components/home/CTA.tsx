import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-morphism rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-3xl text-center relative overflow-hidden group">
            {/* Inner Glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Direct Channel</p>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] text-glow animate-fade-up stagger-1">
                Ready to Discuss Your <span className="text-primary">Cargo Requirements?</span>
              </h2>

              <p className="text-white/70 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-2">
                Our global team is standing by to provide expert guidance and
                competitive chartering solutions tailored to your specific logistics needs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-up stagger-3">
                <Link
                  to="/contact"
                  className="group relative px-10 py-5 bg-primary text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(180,30,30,0.4)] hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="flex items-center gap-3">
                    Partner With Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <a
                  href="tel:+914412345678"
                  className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  Speak to an Expert
                </a>
              </div>

              {/* Contact Grid */}
              <div className="grid sm:grid-cols-2 gap-8 pt-12 border-t border-white/10 animate-fade-up stagger-4">
                <div className="flex items-center justify-center gap-4 group/item cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">24/7 Operations</p>
                    <a href="tel:+914412345678" className="text-lg text-white font-semibold hover:text-primary transition-colors">+91 44 1234 5678</a>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 group/item cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Inquiries</p>
                    <a href="mailto:chartering@zimmaritime.com" className="text-lg text-white font-semibold hover:text-primary transition-colors">chartering@zimmaritime.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
