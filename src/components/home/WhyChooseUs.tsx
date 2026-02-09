import { Check, Award, Users, BarChart3 } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    { value: '12+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { value: '500+', label: 'Vessels Fixed', icon: <BarChart3 className="w-6 h-6" /> },
    { value: '15+', label: 'Ports Covered', icon: <Users className="w-6 h-6" /> },
    { value: '100+', label: 'Happy Clients', icon: <Check className="w-6 h-6" /> },
  ];

  const reasons = [
    'Deep expertise in dry bulk ship broking',
    'Strong operational background in logistics',
    'Established network across Indian subcontinent',
    'Parent company experience in port operations',
    'Comprehensive coverage from Handysize to Supramax',
    'Long-term partnerships with leading charterers',
  ];

  return (
    <section className="section-padding bg-transparent text-foreground relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <p className="text-primary font-semibold uppercase tracking-widest text-[10px]">Why Choose Us</p>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] text-glow">
              A Partner You <span className="text-primary">Can Trust</span>
            </h2>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              With over a decade of maritime excellence, ZIM Maritime delivers
              unparalleled expertise in global logistics and ship brokering,
              built on a foundation of integrity and precision.
            </p>

            {/* Reasons List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-white/80 text-sm leading-tight group-hover:text-white transition-colors">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`glass-morphism rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group relative overflow-hidden ${index % 2 === 1 ? 'sm:translate-y-8' : ''
                  }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
