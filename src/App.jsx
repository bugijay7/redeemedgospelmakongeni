import React, { useState, useEffect } from 'react';
import churchWorship from "./assets/church-worship.jpg"; 

import { Church, Users, Baby, User, Heart, MapPin, Mail, Phone, Calendar, Clock, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function RedeemedGospelChurchMakongeni() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const ministries = [
    { icon: <User className="w-10 h-10" />, title: "Men's Ministry", desc: "Empowering men to lead in faith, family, and community." },
    { icon: <Heart className="w-10 h-10" />, title: "Women's Ministry", desc: "Building strong, godly women who impact lives around them." },
    { icon: <Users className="w-10 h-10" />, title: "Youth Ministry", desc: "Equipping young adults with purpose and biblical truth." },
    { icon: <User className="w-10 h-10" />, title: "Teens Ministry", desc: "Guiding teenagers to grow in faith, character, and leadership." },
    { icon: <Baby className="w-10 h-10" />, title: "Sunday School", desc: "Teaching children foundational Christian values in a fun way." },
    { icon: <Heart className="w-10 h-10" />, title: "Outreach", desc: "Serving our community with Christ’s love and compassion." }
  ];

  const events = [
    { title: "Sunday Worship Service", date: "Every Sunday", time: "9:00 AM - 11:30 AM", desc: "Join us for powerful worship and biblical teaching." },
    { title: "Midweek Bible Study", date: "Every Wednesday", time: "6:00 PM - 8:00 PM", desc: "Deepen your faith and fellowship with us." },
    { title: "Youth Conference 2025", date: "August 20-22, 2025", time: "All Day", desc: "A dynamic gathering for young people in Thika and beyond." }
  ];

  return (
    <div className="min-h-screen bg-white" data-theme="light">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Church className="text-yellow-400" size={28} />
            <span className="text-white font-bold text-xl">Redeemed Gospel Church Thika Makongeni</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {['About', 'Ministries', 'Events', 'Services', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-yellow-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img 
            src={churchWorship} 
            alt="Church worship" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Redeemed Gospel Church Thika Makongeni</h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-400">A Place of Restoration, Hope & Transformation</p>
          <a href="#services" className="btn btn-lg bg-yellow-400 hover:bg-yellow-500 text-blue-900 border-none">
            Join Us Online
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Welcome to RGC Makongeni</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-blue-900">Our Mission:</span> To win souls, build disciples, and impact the world through the transformative power of Jesus Christ.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-blue-900">Our Vision:</span> To raise a Christ-centered community empowered to influence every sphere of life.
                </p>
                <p className="text-lg leading-relaxed">
                  Redeemed Gospel Church Thika Makongeni is a home of love, growth, and purpose. We pursue spiritual maturity, fellowship, and kingdom expansion.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={churchWorship} 
                alt="Church worship" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold text-blue-900">Join Us</p>
                <p className="text-blue-900">Every Sunday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Ministries</h2>
            <p className="text-gray-600 text-lg">Serving all ages with excellence and compassion</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, idx) => (
              <div key={idx} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="card-body items-center text-center">
                  <div className="text-blue-900 mb-4">{ministry.icon}</div>
                  <h3 className="card-title text-blue-900">{ministry.title}</h3>
                  <p className="text-gray-600">{ministry.desc}</p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-sm btn-outline border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-yellow-400 text-lg">Stay connected and be part of the move of God</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <div key={idx} className="card bg-white text-gray-800 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="card-body">
                  <h3 className="card-title text-blue-900 text-xl">{event.title}</h3>
                  <div className="space-y-2 my-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="text-yellow-400" size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="text-yellow-400" size={18} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{event.desc}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn bg-yellow-400 hover:bg-yellow-500 text-blue-900 border-none">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Watch Our Services Online</h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether near or far, you can still be part of our worship experience.
            </p>
            <div className="aspect-video bg-gray-800 rounded-lg shadow-2xl mb-8 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200" 
                alt="Live worship" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-lg bg-blue-900 hover:bg-blue-800 text-white border-none">
                <Youtube className="mr-2" size={20} /> Watch Live
              </button>
              <button className="btn btn-lg btn-outline border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                Browse Sermons
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg">We'd love to hear from you</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="card bg-blue-900 text-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-yellow-400 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-yellow-400 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-sm">Thika, Makongeni, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="text-yellow-400 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm">+254 758 043 916</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="text-yellow-400 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm">rgcthikamakongeni@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <h4 className="font-semibold text-yellow-400 mb-3">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="btn btn-circle bg-yellow-400 hover:bg-yellow-500 text-blue-900 border-none">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="btn btn-circle bg-yellow-400 hover:bg-yellow-500 text-blue-900 border-none">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="btn btn-circle bg-yellow-400 hover:bg-yellow-500 text-blue-900 border-none">
                      <Youtube size={20} />
                    </a>
                    <a href="#" className="btn btn-circle bg-yellow-400 hover:bg-yellow-500 text-blue-900 border-none">
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card bg-gray-50 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-blue-900 mb-4">Send Us a Message</h3>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="input input-bordered"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="input input-bordered"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Message</span>
                    </label>
                    <textarea 
                      className="textarea textarea-bordered h-32" 
                      placeholder="Your message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button onClick={handleSubmit} className="btn bg-blue-900 hover:bg-blue-800 text-white border-none">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Church className="text-yellow-400" size={28} />
                <span className="font-bold text-xl">Redeemed Gospel Church Thika Makongeni</span>
              </div>
              <p className="text-gray-300">A home where everyone matters. Encounter God, grow in faith, and impact your world.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Ministries', 'Events', 'Services', 'Contact'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-yellow-400">Service Times</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Sunday Worship: 9:00 AM</li>
                <li>Midweek Service: 6:00 PM (Wed)</li>
                <li>Prayer Meeting: 6:00 AM (Fri)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Redeemed Gospel Church Thika Makongeni. All rights reserved. Built with faith and purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
