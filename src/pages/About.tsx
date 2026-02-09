import Layout from '@/components/layout/Layout';
import { Check, Award, Users, Target, Anchor, Ship } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">About ZIM Maritime</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Maritime Partner Since 2012
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Building lasting partnerships through operational excellence, 
              market expertise, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence in Maritime Logistics
              </h2>
              <div className="section-divider mb-8 mx-0" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Established in 2012, ZIM Maritime has grown from a regional ship brokering 
                  firm to a comprehensive maritime logistics provider with a strong presence 
                  across the Indian subcontinent, Persian Gulf, and Southeast Asia.
                </p>
                <p>
                  Our foundation in dry bulk ship broking has given us deep expertise in 
                  matching cargo requirements with the right vessels. Over the years, we've 
                  expanded our services to include vessel chartering, port logistics, surface 
                  transportation, and stevedoring coordination.
                </p>
                <p>
                  What sets us apart is our operational background. Our parent company's 
                  extensive experience in port operations and logistics has instilled in us 
                  an understanding of the entire supply chain—from vessel to final delivery.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80"
                alt="Port operations"
                className="rounded-lg shadow-maritime-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold font-serif">12+</div>
                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Our Values</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What Drives Us Forward
            </h2>
            <div className="section-divider mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Precision',
                description: 'We understand that every cargo requirement is unique. Our team works meticulously to find the optimal vessel match for your specific needs.',
              },
              {
                icon: Users,
                title: 'Partnership',
                description: 'We believe in building long-term relationships. Our clients are partners, and their success is our success.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'From initial inquiry to final delivery, we maintain the highest standards of service and professionalism.',
              },
            ].map((value, index) => (
              <div key={value.title} className="maritime-card p-8 text-center">
                <div className="service-icon mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Our Expertise</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Specialized in Dry Bulk Ship Broking
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Our core strength lies in dry bulk vessel operations. We have an extensive 
                network of ship owners and operators, enabling us to provide competitive 
                solutions for a wide range of dry bulk cargoes.
              </p>
              <ul className="space-y-4">
                {[
                  'Coal, iron ore, and mineral transportation',
                  'Agricultural commodities and grains',
                  'Cement and construction materials',
                  'Project cargo and breakbulk',
                  'Specialized bulk commodities',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Ship className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold font-serif mb-2">500+</div>
                <div className="text-white/70 text-sm">Vessels Fixed</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Anchor className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold font-serif mb-2">15+</div>
                <div className="text-white/70 text-sm">Ports Covered</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center col-span-2">
                <div className="text-3xl font-bold font-serif mb-2">2,000 - 60,000 DWT</div>
                <div className="text-white/70 text-sm">Vessel Size Range</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Strength */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Operational Strength</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Built on a Foundation of Logistics Excellence
              </h2>
              <div className="section-divider mb-6" />
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Our parent company's extensive experience in port operations, surface 
                transportation, and supply chain management gives ZIM Maritime a unique 
                advantage in the industry. We don't just broker vessels—we understand 
                the entire logistics chain.
              </p>
              <p className="leading-relaxed mb-6">
                This operational background enables us to anticipate challenges, provide 
                realistic timelines, and ensure smooth coordination between vessel operations 
                and shore-side logistics. Our clients benefit from this holistic understanding 
                of the shipping process.
              </p>
              <p className="leading-relaxed">
                Whether you need a single vessel for a spot cargo or a long-term chartering 
                arrangement, our team has the expertise and network to deliver results. 
                We pride ourselves on reliability, transparency, and a commitment to 
                finding the best solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
