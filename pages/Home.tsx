
import React from 'react';
import { PageState } from '../types';
import { ArrowRight, Database, Search, TrendingUp } from 'lucide-react';

interface HomeProps {
  setPage: (page: PageState) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
           <video 
             autoPlay 
             loop 
             muted 
             playsInline
             className="w-full h-full object-cover object-top"
             poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
           >
             <source src="/veo-logo.mp4" type="video/mp4" />
             {/* Fallback to original image if video fails or on power-save mode */}
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
               alt="Technology Background" 
               className="w-full h-full object-cover object-top"
             />
           </video>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="md:w-4/5">
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
              From the $2,000 Computer to <span className="text-accent">AI in Philanthropy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              <span className="text-white font-medium block mb-2">Combining the subjects of AI and Philanthropic Research.</span>
              Why philanthropy must have a seat at the table when AI policies are written. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setPage(PageState.BLOG)}
                className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center"
              >
                Read the Story <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                onClick={() => setPage(PageState.AUDIO)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-medium transition-all"
              >
                Listen to Webcasts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Areas */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary">Unlocking Nonprofit Potential</h2>
            <p className="mt-4 text-lg text-gray-600">Leveraging data and AI for a greater impact.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div onClick={() => setPage(PageState.BLOG)} className="cursor-pointer bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">AI for All Sizes</h3>
              <p className="text-gray-600">
                Whether hosting an ice cream social or a gala, learn how prospect researchers can lead the way in data collection.
              </p>
            </div>

            <div onClick={() => setPage(PageState.BLOG)} className="cursor-pointer bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Data Strategy</h3>
              <p className="text-gray-600">
                Adapting to change by segmenting data to focus on the right prospects and uncovering hidden capacity.
              </p>
            </div>

            <div onClick={() => setPage(PageState.BLOG)} className="cursor-pointer bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">The Human Equation</h3>
              <p className="text-gray-600">
                Navigating AI's impact on work culture. Why AI might just be your favorite coworker that never needs coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
