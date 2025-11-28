import React from 'react';
import { ShieldCheck, Scale, Globe, FileText, Cpu, Briefcase } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-gold-500" />,
      title: 'Regulatory Compliance',
      description:
        'Advising clients on compliance with national and international regulatory frameworks, including financial regulations and corporate governance.',
    },
    {
      icon: <Cpu className="w-10 h-10 text-gold-500" />,
      title: 'Digital Asset & Blockchain Law',
      description:
        'Guidance on cryptocurrency regulations, blockchain governance, digital-asset compliance, and emerging fintech legal frameworks.',
    },
    {
      icon: <Globe className="w-10 h-10 text-gold-500" />,
      title: 'International Trade Law',
      description:
        'Legal support on cross-border transactions, trade regulations, investment frameworks, and international commercial obligations.',
    },
    {
      icon: <FileText className="w-10 h-10 text-gold-500" />,
      title: 'Contract Drafting & Advisory',
      description:
        'Drafting, reviewing, and negotiating legally sound agreements that protect client interests and minimize risk exposure.',
    },
    {
      icon: <Scale className="w-10 h-10 text-gold-500" />,
      title: 'Civil & Criminal Litigation',
      description:
        'Representation in civil and criminal matters, ensuring strategic advocacy, procedural accuracy, and strong courtroom performance.',
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold-500" />,
      title: 'Digital Evidence Management',
      description:
        'Specialized handling of digital evidence, metadata verification, chain-of-custody compliance, and secure digital workflows.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-700">Practice Areas</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I provide expert legal services across modern and traditional practice areas, with a focus on regulatory compliance, digital assets, and cross-border matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-navy-700 hover:bg-navy-800 text-white px-8 py-3 rounded font-medium transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}