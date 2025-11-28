import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ABOUT SECTION */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nformi Ronald Ngeh</h3>
            <p className="text-gray-400 mb-4">
              Barrister & Solicitor dedicated to delivering impactful legal solutions with
              integrity, precision, and a passion for fintech and digital-asset regulation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17p9a9XXGs/" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/nformi-ronald-ngeh-a4a235223?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Practice Areas</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-gold-500 transition-colors">Experience</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-gold-500 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* PRACTICE AREAS */}
          <div>
            <h3 className="text-lg font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Regulatory Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Digital Asset & Blockchain Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">International Trade Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Contract Drafting & Advisory</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Civil & Criminal Litigation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Digital Evidence Management</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Yaounde, Cameroon</p>
              <p className="mb-2">Phone: +237 651 985 498</p>
              <p>Email: ronaldngeh@gmail.com</p>
            </address>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Nformi Ronald Ngeh. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}