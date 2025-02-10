"use client"
import React, { useState } from 'react';
import { Moon, Menu, X } from 'lucide-react';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'About Us', href: '#', current: false },
        { name: 'Our Offerings', href: '#', current: false },
        { name: 'Blog', href: '#', current: false },
        { name: 'Support', href: '#', current: false },
      ];    
      return (
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold">Aya</span>
                </div>
    
                {/* Desktop Navigation */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`${
                        item.current
                          ? 'text-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      } inline-flex items-center px-1 pt-1 text-sm font-medium`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
    
              {/* Right side icons */}
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button className="p-2 rounded-full text-gray-500 hover:text-gray-700">
                  <Moon className="h-5 w-5" />
                </button>
              </div>
    
              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile menu */}
          {isOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    } block pl-3 pr-4 py-2 text-base font-medium`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      );
}

export default Header