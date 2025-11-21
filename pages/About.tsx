import React from 'react';
import { Briefcase, GraduationCap, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 border-2 border-accent">
             {/* Placeholder for profile pic, replacing local image */}
             <User className="h-full w-full p-2 text-gray-500" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-primary">About Me</h1>
        </div>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4 font-medium text-xl text-gray-800">
            My journey from the factory floor to the nonprofit sector—with a few pivots along the way.
          </p>
          <p className="mb-4">
            I’ve been working in the nonprofit world for seven years, and I fell in love with it immediately. But my path here wasn’t typical.
          </p>
          <p className="mb-4">
            After high school, I went straight into factory work as a machine operator. That changed after a back injury forced me to pivot. I spent a couple of years in sales, but deep down, I knew I was capable of more.
          </p>
          <p className="mb-4">
            At 37, I took a leap and went to college—first earning my associate’s degree, then my bachelor’s, and eventually my master’s in Business Psychology. So yes, you could say I bring a unique perspective to the work I do today.
          </p>
          <p className="mb-4">
            I’ve been fascinated by computers since I was 16, when I begged my mom for a computer and somehow got internet access thanks to a friend who knew a guy. (Yes, I’m that old.) But despite the winding path, I’ve never been behind.
          </p>
          <p>
            This blog is where I share what I’m learning—about technology, nonprofit innovation, data strategy, and the personal growth that happens when you decide to bet on yourself a little later in life.
          </p>

          <div className="bg-blue-50 border-l-4 border-accent p-6 mt-8 rounded-r-lg">
             <p className="text-gray-800 italic">
               "I was recently featured in the <a href="https://connections.aprahome.org/Articles/apra-member-spotlight-ryan-clement-loves-change-and-data" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">APRA Member Spotlight</a>, where I shared insights on nonprofit AI and data-driven strategy."
             </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-serif font-bold text-primary mb-8">Experience & Education</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="flex items-center text-lg font-bold text-primary mb-4">
              <Briefcase className="mr-2 h-5 w-5 text-accent" /> Professional Journey
            </h3>
            <div className="space-y-8">
               <div className="relative border-l-2 border-gray-200 pl-6 pb-2">
                 <div className="absolute -left-[5px] top-1 bg-accent h-2.5 w-2.5 rounded-full"></div>
                 <h4 className="font-bold text-gray-800 text-lg">Prospect Research & Strategy</h4>
                 <span className="text-sm text-accent font-medium block mb-2">Present</span>
                 <p className="text-gray-600">Specializing in AI adoption, predictive modeling, and pipeline development for prospect development.</p>
               </div>
               <div className="relative border-l-2 border-gray-200 pl-6 pb-2">
                 <div className="absolute -left-[5px] top-1 bg-gray-300 h-2.5 w-2.5 rounded-full"></div>
                 <h4 className="font-bold text-gray-800 text-lg">AmeriCorps VISTA</h4>
                 <span className="text-sm text-gray-500 block mb-2">Past Experience</span>
                 <p className="text-gray-600">Hosted community events (like ice cream socials!) and managed data collection to show engagement and secure sustainable funding.</p>
               </div>
               <div className="relative border-l-2 border-gray-200 pl-6 pb-2">
                 <div className="absolute -left-[5px] top-1 bg-gray-300 h-2.5 w-2.5 rounded-full"></div>
                 <h4 className="font-bold text-gray-800 text-lg">Sales & Manufacturing</h4>
                 <span className="text-sm text-gray-500 block mb-2">Early Career</span>
                 <p className="text-gray-600">Machine operator and sales professional before pivoting to higher education and the nonprofit sector.</p>
               </div>
            </div>
          </div>

          <div>
            <h3 className="flex items-center text-lg font-bold text-primary mb-4">
              <GraduationCap className="mr-2 h-5 w-5 text-accent" /> Education
            </h3>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <ul className="space-y-6">
                 <li className="flex flex-col">
                   <span className="font-bold text-lg text-gray-800">Master of Arts, Business Psychology</span>
                   <span className="text-sm text-accent">Franklin University</span>
                 </li>
                 <li className="flex flex-col">
                   <span className="font-bold text-lg text-gray-800">Bachelor of Science</span>
                   <span className="text-sm text-gray-500">Social Sciences focus</span>
                 </li>
                 <li className="flex flex-col">
                   <span className="font-bold text-lg text-gray-800">Associate Degree</span>
                   <span className="text-sm text-gray-500">Started age 37</span>
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;