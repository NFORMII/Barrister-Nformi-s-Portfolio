import React from 'react';
import { CheckCircle } from 'lucide-react';

export function ExperienceSection() {
  const achievements = [
    'Successfully represented clients in civil and criminal matters with strong compliance alignment',
    'Drafted and reviewed high-value legal documents ensuring regulatory and procedural accuracy',
    'Delivered cross-border legal advisory services across multiple sectors',
    'Ensured digital evidence integrity through metadata verification and secure workflows',
    'Supported multi-country technical operations in Nigeria, Cameroon, and Congo',
    'Recognized for professionalism, integrity, and strong client-oriented service'
  ];

  return (
    <section id="experience" className="py-20 bg-navy-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A professional journey spanning legal practice, regulatory work, and digital systems operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN — PROFESSIONAL JOURNEY */}
          <div>
            <h3 className="text-2xl font-bold text-gold-500 mb-6">Professional Journey</h3>

            <div className="space-y-8">
              {/* PORTIO JURE LAW FIRM */}
              <div className="relative pl-8 border-l-2 border-gold-500">
                <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-gold-500 -ml-[9px]"></div>
                <div className="mb-1 text-gold-500 font-medium">2022 - Present</div>
                <h4 className="text-lg font-bold mb-2">Lawyer</h4>
                <p className="text-gray-300">Portio Jure Law Firm, Buea</p>
                <p className="mt-2 text-gray-400">
                  Providing legal advisory services, litigation representation, contract drafting, and regulatory compliance guidance.
                </p>
              </div>

              {/* DIGITAL SYSTEMS EXPERIENCE (COMBINED ROLES) */}
              <div className="relative pl-8 border-l-2 border-gold-500">
                <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-gold-500 -ml-[9px]"></div>
                <div className="mb-1 text-gold-500 font-medium">2016 - 2022</div>
                <h4 className="text-lg font-bold mb-2">Digital Systems & Technical Operations</h4>
                <p className="text-gray-300">
                  EbonyLife TV • CRTV • Spring Media • Film One • Calix D’Or Films • Switch Entertainment
                </p>
                <p className="mt-2 text-gray-400">
                  Worked across editing, DIT operations, digital asset management, cross-border production workflows, and technical quality control.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — KEY ACHIEVEMENTS */}
          <div>
            <h3 className="text-2xl font-bold text-gold-500 mb-6">Key Achievements</h3>

            <div className="bg-navy-800 rounded-lg p-8">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-navy-600">
                <div className="flex flex-col items-center justify-between">
                  <div className="mb-4 sm:mb-0 text-center sm:text-left">
                    <div className="text-4xl font-bold text-gold-500">10+</div>
                    <div className="text-sm text-gray-400">Years Combined Experience</div>
                  </div>
                  <div className="mb-4 sm:mb-0 text-center sm:text-left">
                    <div className="text-4xl font-bold text-gold-500">300+</div>
                    <div className="text-sm text-gray-400">Clients Supported</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-4xl font-bold text-gold-500">High</div>
                    <div className="text-sm text-gray-400">Professional Integrity Rating</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center sm:text-left">
              <a href="#" className="inline-flex items-center text-gold-500 hover:text-gold-400">
                <span className="mr-2">Download Full CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}