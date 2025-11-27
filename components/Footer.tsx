import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

// Custom X (Twitter) Logo component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
                <img 
                  src="/brain-logo.png" 
                  alt="Logo" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary">Blog-Sense</h3>
            </div>
            <p className="text-sm text-gray-500 mt-1">Combining the subjects of AI and Philanthropic Research.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/in/ryanjclement" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/RyanClemen57495" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <span className="sr-only">X (formerly Twitter)</span>
              <XLogo className="h-6 w-6" />
            </a>
            <a 
              href="mailto:ryanclementconsulting@gmail.com" 
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8 text-center md:text-left">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Blog-Sense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;