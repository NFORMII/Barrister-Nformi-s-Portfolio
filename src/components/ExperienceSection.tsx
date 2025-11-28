import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const roles = [
    {
      year: "2022 – 2023",
      title: "Lawyer",
      firm: "SCP Abdoul Bagui Law Firm, Yaoundé",
      summary:
        "Legal representation, regulatory consulting, document review, and client advisory across civil, criminal, and cross-border matters.",
      duties: [
        "Establishing legal strategies and solutions for clients",
        "Reviewing legal documents for correctness and court readiness",
        "Providing legal advisory across multiple categories of law",
        "Representing clients in civil and criminal trials",
        "Generating new business and managing client engagement",
        "Conducting casework meetings with legal teams",
        "Reporting matters to senior attorneys",
        "Drafting precedents, agreements, and legal documentation",
        "Maintaining court schedules, deadlines, and dockets",
        "Supporting clients across global sectors",
      ],
    },
    {
      year: "2023 – Present",
      title: "Lawyer",
      firm: "Portio Jure Law Firm, Buea",
      summary:
        "Litigation support, contract drafting, regulatory compliance work, and dispute resolution for individuals and organizations.",
      duties: [
        "Developing case strategies aligned with legal compliance",
        "Drafting contracts, agreements, and legal submissions",
        "Litigation preparation and courtroom representation",
        "Providing regulatory and compliance advice to clients",
      ],
    },
    {
      year: "2016 – 2022",
      title: "Digital Systems & Technical Operations",
      firm:
        "EbonyLife TV • CRTV • Spring Media • Film One • Calix D’Or Films • Switch Entertainment",
      summary:
        "Multi-industry experience covering DIT workflows, editing, metadata verification, digital asset handling, and multi-country technical coordination.",
      duties: [
        "Managing digital footage, metadata, and archiving systems",
        "Executing DIT operations and maintaining technical accuracy",
        "Coordinating production workflows across Nigeria, Cameroon, and Congo",
        "Ensuring quality control, encoding integrity, and data preservation",
      ],
    },
  ];

  const achievements = [
    "Successfully represented clients in civil and criminal matters",
    "Drafted and reviewed high-value legal and regulatory documents",
    "Provided cross-border legal advisory across multiple sectors",
    "Ensured digital evidence integrity and metadata security",
    "Supported technical operations across three countries",
    "Recognized for professionalism and client-focused service",
  ];

  return (
    <section id="experience" className="py-20 bg-navy-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A decade of combined legal expertise, regulatory work, and technical digital operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN – EXPERIENCE TIMELINE */}
          <div className="space-y-10">

            {roles.map((role, index) => (
              <div
                key={index}
                className="relative pl-10 border-l border-gold-500 animate-slideUp"
              >
                <div className="absolute top-1 left-0 w-4 h-4 bg-gold-500 rounded-full -ml-[9px]"></div>

                <div className="text-gold-500 font-semibold">{role.year}</div>
                <h4 className="text-xl font-bold mt-1">{role.title}</h4>
                <p className="text-gray-300">{role.firm}</p>

                <p className="mt-2 text-gray-400">{role.summary}</p>

                {/* Accordion Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="mt-4 flex items-center text-gold-500 hover:text-white transition"
                >
                  {openIndex === index ? (
                    <>
                      <ChevronUp className="w-5 h-5 mr-2" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5 mr-2" />
                      View Responsibilities
                    </>
                  )}
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <ul className="mt-4 space-y-2 text-gray-300 text-sm bg-navy-800 p-4 rounded-lg animate-fadeIn">
                    {role.duties.map((duty, i) => (
                      <li key={i}>• {duty}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

          </div>


          {/* RIGHT COLUMN — ACHIEVEMENTS */}
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold text-gold-500 mb-6">
              Key Achievements
            </h3>

            <div className="bg-navy-800 rounded-lg p-8 shadow-lg">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold-500 mr-3 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="mt-10 pt-6 border-t border-navy-600 grid grid-cols-3 text-center">
                <div>
                  <div className="text-4xl font-bold text-gold-500">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold-500">50+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold-500">High</div>
                  <div className="text-sm text-gray-400">
                    Integrity Rating
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/Ronald_nformi_cv.docx"
                download
                className="inline-flex items-center text-gold-500 hover:text-gold-300"
              >
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
