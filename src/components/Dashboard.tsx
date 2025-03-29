import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  Globe2,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  guide: {
    name: string;
    image: string;
    rating: number;
    language: string;
  };
  type: string;
  date: string;
  time: string;
  image: string;
  price: number;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Traditional Japanese Tea Ceremony",
    guide: {
      name: "Yuki Tanaka",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
      rating: 4.9,
      language: "Japanese"
    },
    type: "Cultural Workshop",
    date: "2025-03-20",
    time: "10:00 AM JST",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    price: 35
  },
  {
    id: 2,
    title: "Italian Pasta Making Masterclass",
    guide: {
      name: "Marco Rossi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      rating: 4.8,
      language: "Italian"
    },
    type: "Cooking",
    date: "2025-03-21",
    time: "6:00 PM CET",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=60",
    price: 40
  },
  {
    id: 3,
    title: "Virtual Tour: Ancient Medina of Fez",
    guide: {
      name: "Hassan Alami",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60",
      rating: 4.9,
      language: "Arabic"
    },
    type: "Virtual Tour",
    date: "2025-03-22",
    time: "2:00 PM GMT",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c6127c?w=800&auto=format&fit=crop&q=60",
    price: 25
  }
];

interface UpcomingSession {
  id: number;
  title: string;
  guide: string;
  date: string;
  time: string;
}

const upcomingSessions: UpcomingSession[] = [
  {
    id: 1,
    title: "Korean Calligraphy Basics",
    guide: "Min-ji Kim",
    date: "2025-03-19",
    time: "3:00 PM KST"
  },
  {
    id: 2,
    title: "Spanish Flamenco Dance",
    guide: "Carmen Rodriguez",
    date: "2025-03-20",
    time: "7:00 PM CET"
  }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Search Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search experiences, languages, or guides..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="mt-4 md:mt-0 flex items-center space-x-2 px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-50">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600">Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Experiences</h2>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/experience/${experience.id}`)}
                >
                  <div className="md:flex">
                    <div className="md:w-64 h-48 md:h-auto relative">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                        {experience.type}
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={experience.guide.image}
                          alt={experience.guide.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{experience.guide.name}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Globe2 className="h-4 w-4 mr-1" />
                            <span>{experience.guide.language}</span>
                            <span className="mx-2">•</span>
                            <span>★ {experience.guide.rating}</span>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {experience.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {experience.time}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-indigo-600">
                          ${experience.price}
                        </span>
                        <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                          <span className="font-medium">View Details</span>
                          <ChevronRight className="h-5 w-5 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your Upcoming Sessions
              </h3>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer"
                  >
                    <Calendar className="h-10 w-10 text-indigo-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{session.title}</h4>
                      <p className="text-sm text-gray-500">with {session.guide}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{session.date} • {session.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-center text-indigo-600 font-medium hover:text-indigo-700">
                View All Sessions
              </button>
            </div>

            {/* Messages Preview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Recent Messages
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60"
                    alt="Yuki Tanaka"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Yuki Tanaka</h4>
                    <p className="text-sm text-gray-500">Looking forward to our tea ceremony session!</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
                    alt="Marco Rossi"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">Marco Rossi</h4>
                    <p className="text-sm text-gray-500">Don't forget to prepare the ingredients!</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 flex items-center justify-center space-x-2 text-indigo-600 font-medium hover:text-indigo-700">
                <MessageCircle className="h-5 w-5" />
                <span>Open Messages</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}