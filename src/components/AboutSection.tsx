import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-700">About Me</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional legal representation with
            integrity and personalized attention.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-navy-700 mb-4">
              My Journey
            </h3>
            <p className="text-gray-700 mb-4">
              Barrister & Solicitor with expertise in international trade law, regulatory compliance, and digital evidence management. Skilled in litigation, contract drafting, and cross-border advisory work, with a growing specialization in Fintech, Blockchain Regulation, and Digital Asset Compliance. Combines strong legal analysis with technical proficiency in digital asset handling and secure data workflows to deliver clear, strategic guidance on complex regulatory issues.
            </p>
            <p className="text-gray-700 mb-6">
              After being called to the Bar as a Barrister & Solicitor of the Supreme Court of Nigeria, I began my legal career handling litigation, regulatory compliance, and advisory matters across diverse sectors. Over the years, I expanded my expertise into international trade law, digital-asset governance, and emerging fintech regulation. Today, I combine legal practice with a strong technical foundation in digital evidence and workflow management, allowing me to deliver strategic, high-impact guidance tailored to modern regulatory challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <Award className="text-gold-500 w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  Bar Association Member
                </span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <BookOpen className="text-gold-500 w-5 h-5 mr-2" />
                <span className="text-sm font-medium">  Nigerian law school</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <Users className="text-gold-500 w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  Satisfied Clients
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-navy-700 transform translate-x-4 translate-y-4 rounded-lg"></div>
            <div className="absolute inset-0 bg-gold-500 transform translate-x-2 translate-y-2 rounded-lg"></div>
            <img src="/ronny_pic.jpeg"  className="relative z-10 w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-navy-700 mb-6 text-center">
            My Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-navy-700 mb-3">
                Client-First Approach
              </h4>
              <p className="text-gray-700">
                I believe in putting my clients' needs first, providing
                personalized attention and tailored solutions for each unique
                situation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-navy-700 mb-3">Ethical Practice</h4>
              <p className="text-gray-700">
                Integrity is at the core of my practice. I maintain the highest
                ethical standards while zealously advocating for my clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-navy-700 mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-700">
                The law is constantly evolving. I am committed to staying at the
                forefront of legal developments to provide the best
                representation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}