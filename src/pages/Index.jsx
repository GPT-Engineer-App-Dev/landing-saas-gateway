import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

const Index = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <Hero />
      </section>
      <Features />
      <Pricing />
    </Layout>
  );
};

export default Index;
