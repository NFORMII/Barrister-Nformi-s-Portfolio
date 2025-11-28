import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Ronald provided clear, structured legal guidance during a complex civil matter. His professionalism and strategic approach ensured a smooth resolution.',
      author: 'Emmanuel Fongang',
      position: 'Client – Civil Litigation',
      image:
        'https://via.placeholder.com/150',
    },
    {
      quote:
        'His expertise in compliance and regulatory interpretation helped our organization align with new requirements quickly and effectively.',
      author: 'Linda Mbua',
      position: 'Compliance Manager',
      image:
        'https://via.placeholder.com/150',
    },
    {
      quote:
        'Ronald’s understanding of digital evidence and workflow management was crucial in handling our documentation during an international project.',
      author: 'Samuel Taku',
      position: 'Project Supervisor',
      image:
        'https://via.placeholder.com/150',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-700">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Genuine experiences from clients I’ve supported across legal, regulatory, and digital evidence matters.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
              <Quote className="w-12 h-12 text-gold-500/30 mb-4" />

              <div className="h-48 overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-in-out flex"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <p className="text-gray-700 text-lg italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-navy-700">{testimonial.author}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-navy-700 text-white hover:bg-navy-800 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-gold-500' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-navy-700 text-white hover:bg-navy-800 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
