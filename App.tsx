import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Volunteering } from './components/Volunteering';
import { VolunteeringDetail } from './components/VolunteeringDetail';
import { Skills } from './components/Skills';
import { Ideas } from './components/Ideas';
import { ArrowLeft } from 'lucide-react';
import { volunteeringData } from './data/volunteering';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVolunteeringId, setSelectedVolunteeringId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedVolunteeringId]);

  const handlePageChange = (page: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
        setCurrentPage(page);
        setIsTransitioning(false);
    }, 300); // Wait for fade out
  };

  const handleVolunteeringSelect = (id: string) => {
      setSelectedVolunteeringId(id);
      handlePageChange('volunteering-detail');
  };

  const renderPage = () => {
    switch(currentPage) {
        case 'about': return <About />;
        case 'skills': return <Skills />;
        case 'experience': return <Experience />;
        case 'projects': return <Projects />;
        case 'project-ideas': return <Ideas />;
        case 'education': return (
            <>
                <Education />
                <Certifications />
            </>
        );
        case 'volunteering': return <Volunteering onViewPost={handleVolunteeringSelect} />;
        case 'volunteering-detail': 
            const post = volunteeringData.find(p => p.id === selectedVolunteeringId);
            return post ? <VolunteeringDetail post={post} onBack={() => handlePageChange('volunteering')} /> : <Volunteering onViewPost={handleVolunteeringSelect} />;
        default: return <Home setPage={handlePageChange} />;
    }
  };

  return (
    <main className="w-full min-h-screen bg-black text-white selection:bg-gray-800 selection:text-white relative">
        
        {/* Background Grid - Global */}
        <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Content Container with Transition */}
        {/* Fixed: Removed 'scale-100' from active state. Transform properties on ancestors break position:sticky. */}
        <div className={`relative z-10 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100'}`}>
            
            {currentPage !== 'home' && (
                <div className="fixed top-6 left-6 md:left-10 z-50 animate-fade-in-up">
                    <button 
                        onClick={() => handlePageChange(currentPage === 'volunteering-detail' ? 'volunteering' : 'home')}
                        className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-gray-700 rounded-full text-white hover:bg-white hover:text-black transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">
                            {currentPage === 'volunteering-detail' ? 'Back' : 'Back to Home'}
                        </span>
                    </button>
                </div>
            )}

            {renderPage()}
            
            {/* Footer for Home */}
            {currentPage === 'home' && (
                <div className="w-full text-center pb-8 text-gray-600 text-xs">
                    © 2025 Crafted by Shreyas Nikam
                </div>
            )}
        </div>
    </main>
  );
};

export default App;