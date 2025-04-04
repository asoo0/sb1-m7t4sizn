import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe2, Bell, User } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`w-full ${isHome ? 'absolute top-0 z-50' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe2 className={`h-8 w-8 ${isHome ? 'text-white' : 'text-indigo-600'}`} />
              <span className={`text-xl font-bold ${isHome ? 'text-white' : 'text-gray-900'}`}>
                CultureConnect
              </span>
            </Link>
          </div>
          
          {!isHome && (
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}