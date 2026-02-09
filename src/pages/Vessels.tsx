import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Ship, Anchor, ArrowRight, Check } from 'lucide-react';

const Vessels = () => {
  const vesselTypes = [
    {
      name: 'Self-Propelled Cargo Barges',
      dwt: '2,000 - 4,000 DWT',
      description: 'Versatile vessels ideal for coastal and short-sea shipping operations, particularly suited for shallow draft requirements.',
      features: [
        'Shallow draft capability',
        'Ideal for river and coastal trades',
        'Self-propulsion for independent operation',
        'Flexible cargo options',
      ],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    },
    {
      name: 'Tug & Flat Top Barges',
      dwt: '5,000 - 15,000 DWT',
      description: 'Economical solution for project cargo and bulk commodities, offering flexibility in loading operations.',
      features: [
        'Cost-effective for short voyages',
        'Suitable for oversized cargo',
        'Flexible loading/unloading',
        'No port draft restrictions',
      ],
      image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80',
    },
    {
      name: 'Mini Bulk Carriers',
      dwt: '2,000 - 20,000 DWT',
      description: 'Compact bulk carriers designed for feeder services and ports with size restrictions.',
      features: [
        'Access to smaller ports',
        'Efficient for regional trades',
        'Lower freight costs for small lots',
        'Quick turnaround times',
      ],
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    },
    {
      name: 'Handysize',
      dwt: '15,000 - 35,000 DWT',
      description: 'The workhorses of the dry bulk fleet, offering excellent versatility for a wide range of cargoes and ports.',
      features: [
        'Self-loading gear available',
        'Wide port accessibility',
        'Versatile cargo handling',
        'Established trade routes',
      ],
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80',
    },
    {
      name: 'Handymax',
      dwt: '35,000 - 50,000 DWT',
      description: 'Larger capacity with maintained port flexibility, ideal for medium-volume cargo movements.',
      features: [
        'Enhanced cargo capacity',
        'Good port accessibility',
        'Economies of scale',
        'Modern fleet availability',
      ],
      image: 'https://images.unsplash.com/photo-1577993121821-7c04ea53e71d?w=600&q=80',
    },
    {
      name: 'Supramax',
      dwt: '50,000 - 60,000 DWT',
      description: 'Premium segment offering optimal balance between cargo capacity and port accessibility.',
      features: [
        'Maximum capacity with gear',
        'Superior cargo handling',
        'Fuel efficiency',
        'Extended range capability',
      ],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Vessel Types</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Fleet Expertise
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Comprehensive vessel coverage from 2,000 to 60,000 DWT,
              matching your cargo requirements with the optimal tonnage.
            </p>
          </div>
        </div>
      </section>

      {/* Vessel Range Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { range: '2,000 - 4,000 DWT', type: 'Barges' },
              { range: '5,000 - 15,000 DWT', type: 'Tug & Barge' },
              { range: '2,000 - 20,000 DWT', type: 'Mini Bulk' },
              { range: '15,000 - 35,000 DWT', type: 'Handysize' },
              { range: '35,000 - 50,000 DWT', type: 'Handymax' },
              { range: '50,000 - 60,000 DWT', type: 'Supramax' },
            ].map((item) => (
              <div
                key={item.type}
                className="flex items-center gap-3 px-6 py-3 bg-background rounded-full shadow-maritime"
              >
                <Ship className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium text-foreground">{item.type}</div>
                  <div className="text-sm text-muted-foreground">{item.range}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vessel Types Detail */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vesselTypes.map((vessel, index) => (
              <div key={vessel.name} className="maritime-card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={vessel.image}
                    alt={vessel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <Anchor className="w-4 h-4" />
                    <span className="text-sm font-medium">{vessel.dwt}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {vessel.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {vessel.description}
                  </p>
                  <ul className="space-y-2">
                    {vessel.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cargo Types - Bento Box Redesign */}
      <section className="section-padding bg-[#000d1a] relative overflow-hidden">
        {/* Neon Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent" />
          <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00f3ff] to-transparent" />
          <div className="absolute left-3/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00f3ff] to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Cargo Types <span className="text-[#00f3ff]">We Handle</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl border-l-2 border-[#00f3ff] pl-6">
              Our specialized fleet is engineered for the complex logistics of dry bulk commodities,
              ensuring integrity from port to port.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Coal - Large Photography Tile */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group border border-white/10">
              <img
                src="/images/cargo/coal.png"
                alt="Coal Texture"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white mb-2">Coal</h3>
                <div className="w-12 h-1 bg-[#00f3ff] rounded-full" />
              </div>
            </div>

            {/* Iron Ore - Typography Tile */}
            <div className="bg-[#001a33] rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-[#00f3ff]/50 transition-colors group">
              <Anchor className="w-8 h-8 text-[#00f3ff] group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-bold text-white">Iron Ore</h3>
            </div>

            {/* Grains - Photography Tile */}
            <div className="relative overflow-hidden rounded-3xl group border border-white/10">
              <img
                src="/images/cargo/grain.png"
                alt="Grain Texture"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#000d1a]/40 group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">Grains</h3>
              </div>
            </div>

            {/* Steel - Typography Tile (Wide) */}
            <div className="md:col-span-2 bg-gradient-to-r from-[#001a33] to-[#002b4d] rounded-3xl p-8 flex items-center justify-between border border-white/10 hover:border-[#00f3ff]/50 transition-colors group">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Steel Products</h3>
                <p className="text-[#00f3ff] text-sm font-medium tracking-widest uppercase">Industrial Grade</p>
              </div>
              <Ship className="w-12 h-12 text-white/20 group-hover:text-[#00f3ff] transition-colors" />
            </div>

            {/* Cement - Photography Tile */}
            <div className="relative overflow-hidden rounded-3xl group border border-white/10">
              <img
                src="/images/cargo/iron_ore.png"
                alt="Cement/Clinker Texture"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#000d1a]/60 group-hover:bg-[#000d1a]/20 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white">Cement & Clinker</h3>
              </div>
            </div>

            {/* Others - Typography Tile */}
            <div className="bg-[#001a33] rounded-3xl p-8 flex flex-col justify-center border border-white/10 hover:border-[#00f3ff]/50 transition-colors relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#00f3ff]/5 rounded-full blur-2xl group-hover:bg-[#00f3ff]/10 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-4">Other Bulk</h3>
              <div className="flex flex-wrap gap-2">
                {['Sugar', 'Salt', 'Bauxite', 'Fertilizers'].map(item => (
                  <span key={item} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Need a Vessel for Your Cargo?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Share your cargo details and our chartering team will find the
            optimal vessel for your requirements.
          </p>
          <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
            Request Vessel Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Vessels;
