import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe2, Video, Users, BookOpen, ArrowRight, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

function Testimonial({ name, role, content, image }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <div className="flex items-center space-x-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
      <div className="flex text-yellow-400 mt-4">
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
      </div>
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=1600&auto=format&fit=crop&q=60"
            alt="Cultural background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Learn Culture Through
              <span className="block text-indigo-400">Real Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Connect with cultural guides worldwide for immersive language learning
              through cooking, art, music, and virtual tours.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Cultural Journey</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learn Language Through Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in authentic cultural experiences while learning from
              native speakers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-indigo-50 rounded-2xl p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Live Sessions</h3>
              <p className="text-gray-600">Interactive cultural experiences with native guides</p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe2 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Virtual Tours</h3>
              <p className="text-gray-600">Explore historical sites and local traditions</p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">Connect with learners and cultural guides</p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <p className="text-gray-600">Access cultural materials and lesson plans</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Community Says
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              name="Sarah Chen"
              role="Learning Japanese"
              content="The cooking sessions with my Japanese guide have taught me more than just language - I've learned about traditions, family values, and culture."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60"
            />
            <Testimonial
              name="Mohammed Al-Rashid"
              role="Cultural Guide"
              content="Being able to share my culture while helping others learn Arabic has been an incredibly rewarding experience."
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
            />
            <Testimonial
              name="Isabella Santos"
              role="Learning Italian"
              content="The virtual tours through Rome with my guide Marco have made learning Italian so much more engaging and meaningful."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cultural Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners experiencing language through culture.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe2 className="h-8 w-8 text-indigo-400" />
                <span className="text-xl font-bold">CultureConnect</span>
              </div>
              <p className="text-gray-400">
                Connecting cultures through immersive learning experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Live Sessions</li>
                <li>Virtual Tours</li>
                <li>Cultural Guides</li>
                <li>Resources</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 CultureConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}