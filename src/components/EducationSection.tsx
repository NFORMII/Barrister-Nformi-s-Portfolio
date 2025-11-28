import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-700">Education & Credentials</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My academic background and continuing education form the foundation of my legal and regulatory expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN — FORMAL EDUCATION */}
          <div>
            <h3 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-gold-500" />
              Formal Education
            </h3>

            <div className="space-y-8">
              {/* BARRISTER & SOLICITOR */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-navy-700">Barrister & Solicitor</h4>
                  <span className="text-gold-500 text-sm font-medium">Year</span>
                </div>
                <p className="text-gray-700 font-medium">Nigerian Law School</p>
                <p className="mt-2 text-gray-600">Called to the Bar of the Supreme Court of Nigeria.</p>
              </div>

              {/* LLM */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-navy-700">LLM – International Trade & Investment Law in Africa</h4>
                  <span className="text-gold-500 text-sm font-medium">2015–2017</span>
                </div>
                <p className="text-gray-700 font-medium">University of Dschang</p>
                <p className="mt-2 text-gray-600">Advanced studies in international economic law and regulatory frameworks.</p>
              </div>

              {/* LLB */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-navy-700">LLB – Law</h4>
                  <span className="text-gold-500 text-sm font-medium">2011–2014</span>
                </div>
                <p className="text-gray-700 font-medium">University of Buea</p>
                <p className="mt-2 text-gray-600">Undergraduate legal training with emphasis on public, private, and commercial law.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — CERTIFICATIONS & BAR ADMISSIONS */}
          <div>
            <h3 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-gold-500" />
              Continuing Education & Certifications
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-navy-700">Digital Evidence & Compliance Workshops</h4>
                  <span className="text-gold-500 text-sm font-medium">Year</span>
                </div>
                <p className="text-gray-700 font-medium">Various Professional Programs</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-navy-700">Blockchain & Fintech Regulatory Courses</h4>
                  <span className="text-gold-500 text-sm font-medium">Year</span>
                </div>
                <p className="text-gray-700 font-medium">Independent Legal Study & Online Programs</p>
              </div>
            </div>

            {/* BAR ADMISSIONS */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-navy-700 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-gold-500" />
                Bar Admissions
              </h3>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                    <span>Supreme Court of Nigeria</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                    <span>Cameroon (In Progress)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
