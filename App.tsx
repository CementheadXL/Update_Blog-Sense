import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Audio from './pages/Audio';
import Tools from './pages/Tools';
import { PageState } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case PageState.HOME:
        return <Home setPage={setCurrentPage} />;
      case PageState.ABOUT:
        return <About />;
      case PageState.BLOG:
        return <Blog />;
      case PageState.AUDIO:
        return <Audio />;
      case PageState.TOOLS:
        return <Tools />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;