import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function BlogSection() {
  const blogPosts = [
    {
      title: 'Digital Asset Governance: Essential Compliance Principles',
      excerpt:
        'A practical breakdown of digital-asset lifecycle controls, data integrity requirements, and compliance expectations for modern organizations.',
      date: 'January 10, 2024',
      author: 'Nformi Ronald',
      image: 'https://via.placeholder.com/400x250?text=NR',
    },
    {
      title: 'Cross-Border Regulatory Compliance: What Businesses Must Know',
      excerpt:
        'Operating across jurisdictions introduces legal, operational, and documentation risks. Here are the key compliance obligations companies often overlook.',
      date: 'December 2, 2023',
      author: 'Nformi Ronald',
      image: 'https://via.placeholder.com/400x250?text=NR',
    },
    {
      title: 'Managing Digital Evidence: Ensuring Authenticity & Chain of Custody',
      excerpt:
        'From metadata validation to secure transfers, learn the core principles for maintaining reliable digital evidence in high-stakes environments.',
      date: 'October 18, 2023',
      author: 'Nformi Ronald',
      image: 'https://via.placeholder.com/400x250?text=NR',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-700">Legal Insights</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Expert commentary on compliance, digital systems, and cross-border
            legal issues—rooted in real-world experience across jurisdictions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-700 mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <a
                  href="#"
                  className="inline-flex items-center text-gold-500 font-medium hover:text-gold-600"
                >
                  <span className="mr-1">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white px-8 py-3 rounded font-medium transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
