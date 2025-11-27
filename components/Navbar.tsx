import React from 'react';
import { PageState } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: PageState;
  setCurrentPage: (page: PageState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', value: PageState.HOME },
    { label: 'About Me', value: PageState.ABOUT },
    { label: 'Blog', value: PageState.BLOG },
    { label: 'Webcasts & Audio', value: PageState.AUDIO },
    { label: 'AI Research Tool', value: PageState.TOOLS },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => setCurrentPage(PageState.HOME)}>
            <div className="relative mr-3 overflow-hidden rounded-full h-10 w-10 border-2 border-accent/50 group-hover:border-accent transition-colors">
              <img 
                src="/brain-logo.png" 
                alt="Prospect Intelligence Logo" 
                className="h-full w-full object-cover" 
              />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight">Blog-Sense</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setCurrentPage(item.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.value
                      ? 'bg-secondary text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setCurrentPage(item.value);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  currentPage === item.value
                    ? 'bg-secondary text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;