import React from 'react';
import { AudioTrack } from '../types';
import { Mic, Headphones, FileDown } from 'lucide-react';

const TRACKS: AudioTrack[] = [
  {
    id: '1',
    title: 'Fundraising Team Must Write the AI Rules',
    description: 'Artificial Intelligence (AI) is foundational to organizational strategy, but excluding the philanthropy department from AI policy development poses a significant strategic risk.',
    platform: 'SoundCloud',
    date: 'Webcast',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2180404099&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    id: '2',
    title: 'Supercharge Your Prospect Research: Mastering Perplexity AI',
    description: 'Leveraging Perplexity AI for efficient prospect research. Creating a dynamic, intelligent hub to centralize data and streamline workflows.',
    platform: 'SoundCloud',
    date: 'Webcast',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ryan-clement-444462906/supercharge-your-prospect-research-mastering-perplexity-ai&color=%234acaa8&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true',
    resources: [
        { title: 'Perplexity AI Setup Guide', url: '#' },
        { title: 'Research Profile Prompts', url: '#' }
    ]
  },
  {
    id: '3',
    title: 'Streamlined Prospect Research: Master ChatGPT Projects',
    description: 'ChatGPT Projects offers a streamlined, repeatable method for finding and profiling potential donors by integrating your own templates and source materials.',
    platform: 'SoundCloud',
    date: 'Webcast',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ryan-clement-444462906/streamlined_prospect_research&color=%234acaa8&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true',
    resources: [
        { title: 'ChatGPT Project Setup Guide', url: '#' },
        { title: 'Prompt File', url: '#' }
    ]
  }
];

const Audio: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Webcasts & Audio</h1>
        <p className="text-lg text-gray-600">
          Listen to discussions on AI strategy in prospect development, featuring content created with NotebookLLM and hosted on SoundCloud.
        </p>
      </div>

      <div className="space-y-12">
        {TRACKS.map((track) => (
          <div key={track.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${track.platform === 'SoundCloud' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'}`}>
                    {track.platform === 'SoundCloud' ? <Headphones className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-primary">{track.title}</h3>
                    <p className="text-sm text-gray-500">{track.description}</p>
                </div>
            </div>
            
            {/* Embed Container */}
            {track.embedUrl && (
                <div className="soundcloud-embed w-full mb-6">
                    <iframe 
                        width="100%" 
                        height={track.id === '1' ? "300" : "166"} 
                        scrolling="no" 
                        frameBorder="no" 
                        allow="autoplay" 
                        src={track.embedUrl}
                        title={track.title}
                        className="rounded-xl shadow-sm"
                    ></iframe>
                </div>
            )}

            {/* Resources Section */}
            {track.resources && track.resources.length > 0 && (
                <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">Downloads & Resources</h4>
                    <div className="flex flex-wrap gap-3">
                        {track.resources.map((res, idx) => (
                            <a 
                                key={idx} 
                                href={res.url} 
                                onClick={(e) => e.preventDefault()} // Prevent default since we don't have real PDF files in this env
                                className="inline-flex items-center px-4 py-2 rounded-md bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200 hover:bg-white hover:border-accent hover:text-accent transition-all"
                            >
                                <FileDown className="h-4 w-4 mr-2" />
                                {res.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Audio;