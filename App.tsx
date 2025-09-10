import React, { useState, useCallback } from 'react';
import { FormData, Report, Language } from './types';
import Questionnaire from './components/Questionnaire';
import ReportDisplay from './components/ReportDisplay';
import { generateReport } from './services/geminiService';
import { LogoIcon, SparklesIcon } from './components/Icons';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

const AppContent: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    size: 100,
    seatingCapacity: 40,
    servesAlcohol: false,
    kosher: true,
    foodType: 'dairy',
    deliveryService: 'none',
  });
  
  const [report, setReport] = useState<Report | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setReport(null);
    try {
      const generatedReport = await generateReport(formData, language);
      setReport(generatedReport);
    } catch (err) {
      console.error(err);
      setError(t('error_message'));
    } finally {
      setIsLoading(false);
    }
  }, [formData, language, t]);

  const handleStartOver = () => {
    setReport(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-100/50 text-slate-800 flex flex-col items-center p-4 sm:p-6 lg:p-8 relative">
      <LanguageSwitcher />
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{t('title')}</h1>
            <LogoIcon />
          </div>
          <p className="text-lg text-slate-600">{t('subtitle')}</p>
        </header>
        
        <main>
          {!report && !isLoading && !error && (
            <Questionnaire 
              formData={formData} 
              setFormData={setFormData}
              onSubmit={handleFormSubmit}
            />
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center bg-white p-12 rounded-2xl shadow-lg border border-slate-200">
               <SparklesIcon className="w-16 h-16 text-blue-500 animate-pulse mb-6" />
               <h2 className="text-2xl font-semibold text-slate-800 mb-2">{t('loading_title')}</h2>
               <p className="text-slate-600 mb-1">{t('loading_subtitle')}</p>
               <p className="text-slate-500 text-sm">{t('loading_notice')}</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">{t('error_title')}</h2>
              <p className="mb-6">{error}</p>
              <button
                onClick={handleStartOver}
                className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors"
              >
                {t('error_button')}
              </button>
            </div>
          )}

          {report && !isLoading && (
            <ReportDisplay report={report} onStartOver={handleStartOver} />
          )}
        </main>
      </div>
       <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('footer')}</p>
        </footer>
    </div>
  );
}


const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);


export default App;
