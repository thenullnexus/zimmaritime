import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FocusPorts from '@/components/home/FocusPorts';
import CTA from '@/components/home/CTA';


const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="relative z-10">
        <Introduction />
        <Services />
        <WhyChooseUs />
        <FocusPorts />
      </div>
      <CTA />
    </Layout>
  );
};

export default Index;
