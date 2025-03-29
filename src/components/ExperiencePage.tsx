import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Globe2,
  Users,
  MessageCircle,
  Star,
  CheckCircle,
  Languages
} from 'lucide-react';

interface Review {
  id: number;
  user: {
    name: string;
    image: string;
    country: string;
  };
  rating: number;
  date: string;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    user: {
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      country: "United States"
    },
    rating: 5,
    date: "2025-03-01",
    content: "Such an amazing experience! I learned so much about Japanese culture through the tea ceremony. Yuki is an excellent teacher who makes everything easy to understand."
  },
  {
    id: 2,
    user: {
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      country: "South Korea"
    },
    rating: 5,
    date: "2025-02-28",
    content: "The attention to detail in explaining each step of the ceremony was incredible. I appreciate how Yuki connected each movement to its cultural significance."
  }
];

export default function ExperiencePage() {
  const { id } = useParams();
  
  // For demo purposes, we'll show the tea ceremony experience
  const experience = {
    id: 1,
    title: "Traditional Japanese Tea Ceremony",
    guide: {
      name: "Yuki Tanaka",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
      rating: 4.9,
      language: "Japanese",
      experience: "10+ years",
      totalStudents: 234
    },
    description: "Immerse yourself in the ancient art of Japanese tea ceremony (Chanoyu). Learn about the philosophical principles of harmony, respect, purity, and tranquility while mastering the traditional techniques of preparing and serving matcha.",
    includes: [
      "Live 90-minute interactive session",
      "Traditional tea ceremony demonstration",
      "Cultural history and context",
      "Q&A session",
      "Digital handbook with key terms"
    ],
    date: "2025-03-20",
    time: "10:00 AM JST",
    duration: "90 minutes",
    groupSize: "Max 6 participants",
    language: "Japanese (English translation provided)",
    price: 35,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60"
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Header */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {experience.title}
                </h1>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Globe2 className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{experience.language}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{experience.groupSize}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {experience.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={experience.guide.image}
                      alt={experience.guide.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {experience.guide.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{experience.guide.rating}</span>
                        <span className="mx-2">•</span>
                        <span>{experience.guide.experience}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Message Guide
                  </button>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What's Included
              </h2>
              <div className="space-y-3">
                {experience.includes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Reviews
                </h2>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold text-gray-900">
                    {experience.guide.rating}
                  </span>
                  <span className="text-gray-500">
                    ({experience.guide.totalStudents} students)
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={review.user.image}
                        alt={review.user.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {review.user.name}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <Globe2 className="h-4 w-4 mr-1" />
                          <span>{review.user.country}</span>
                          <span className="mx-2">•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${experience.price}
                </span>
                <span className="text-gray-500"> / person</span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Date</span>
                  </div>
                  <span className="font-medium text-gray-900">{experience.date}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Time</span>
                  </div>
                  <span className="font-medium text-gray-900">{experience.time}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Languages className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Language</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {experience.language.split('(')[0].trim()}
                  </span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-4">
                Book Experience
              </button>

              <button className="w-full border border-gray-300 text-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Free cancellation up to 24 hours before the experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}