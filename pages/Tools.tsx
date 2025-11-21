import React, { useState } from 'react';
import { generateResearchStrategy } from '../services/geminiService';
import { Sparkles, Loader2, FileText, Target } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const Tools: React.FC = () => {
  const [sector, setSector] = useState('');
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sector || !topic) return;

    setLoading(true);
    setError(null);
    setResult('');

    try {
      const strategy = await generateResearchStrategy(topic, sector);
      setResult(strategy);
    } catch (err) {
      setError('Failed to generate strategy. Please check your API key or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
          <Sparkles className="h-8 w-8 text-accent" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">The Research Assistant</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Powered by Gemini 2.5. Enter a sector (e.g., Higher Ed, Healthcare) and a specific research question or prospect type to generate a tailored research strategy template.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
              <Target className="mr-2 h-5 w-5 text-gray-400" />
              Configuration
            </h2>
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nonprofit Sector</label>
                <select 
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  required
                >
                  <option value="">Select a sector...</option>
                  <option value="Higher Education">Higher Education</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Environmental">Environmental / Climate</option>
                  <option value="Arts & Culture">Arts & Culture</option>
                  <option value="Human Services">Human Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Research Focus</label>
                <textarea 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="E.g. Identifying tech entrepreneurs interested in scholarship funding..."
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none h-32 resize-none"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading || !sector || !topic}
                className="w-full bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" /> Generating...
                  </>
                ) : (
                  'Generate Strategy'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Output Section */}
        <div className="lg:col-span-2">
          <div className="bg-white min-h-[500px] p-8 rounded-xl shadow-sm border border-gray-200">
            {error && (
               <div className="bg-red-50 text-red-600 p-4 rounded-md mb-4 border border-red-100">
                 {error}
               </div>
            )}
            
            {!result && !loading && !error && (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <FileText className="h-16 w-16 mb-4 opacity-20" />
                <p>Select a sector and topic to generate a research plan.</p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center text-gray-500">
                <Loader2 className="h-12 w-12 animate-spin text-accent mb-4" />
                <p className="animate-pulse">Consulting the AI models...</p>
              </div>
            )}

            {result && (
              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl font-serif font-bold text-primary border-b pb-2 mb-4">
                    Strategy: {sector}
                </h3>
                <div className="markdown-body">
                    {/* Simple rendering of markdown content */}
                    <ReactMarkdown>{result}</ReactMarkdown>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400 italic">
                    Generated by Gemini 2.5. Verify all data points with primary sources.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;