import React, { lazy } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-700">Get In Touch</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a legal question or need representation? Contact me today to
            schedule a consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-navy-700 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-navy-700 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-700">
                      Office Address
                    </h4>
                    <p className="text-gray-600">
                      123 Legal Avenue, Suite 500
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-navy-700 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-700">Phone</h4>
                    <p className="text-gray-600">(212) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-navy-700 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-700">Email</h4>
                    <p className="text-gray-600">nformironald@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-navy-700 p-3 rounded-full mr-4">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-700">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
              <iframe src="../WIN_20250607_11_51_04_Pro.jpg" className="w-full h-full border-0" allowFullScreen loading="lazy" title="Office Location"></iframe>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-700 mb-6">
                Send Me a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500" required />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500">
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="family">Family Law</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="contract">Contract Law</option>
                    <option value="estate">Estate Planning</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500" required></textarea>
                </div>
                <button type="submit" className="w-full bg-navy-700 hover:bg-navy-800 text-white py-3 rounded-md font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}