import React, { useState, useMemo, useEffect } from 'react';
import { Report, ReportSection } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { CheckShieldIcon } from './Icons';

interface ReportDisplayProps {
  report: Report;
  onStartOver: () => void;
}

const PriorityBadge: React.FC<{ priority: string }> = ({ priority }) => {
  const { t } = useLanguage();
  const lowerPriority = priority.toLowerCase();
  
  const priorityMap: { [key: string]: string } = {
    high: t('priority_high'),
    medium: t('priority_medium'),
    low: t('priority_low'),
  };

  const translatedPriority = priorityMap[lowerPriority] || priority;
  
  let colorClasses = 'bg-slate-100 text-slate-700 border-slate-300';
  if (lowerPriority === 'high') {
    colorClasses = 'bg-red-100 text-red-800 border-red-300';
  } else if (lowerPriority === 'medium') {
    colorClasses = 'bg-yellow-100 text-yellow-800 border-yellow-300';
  } else if (lowerPriority === 'low') {
    colorClasses = 'bg-green-100 text-green-800 border-green-300';
  }

  return (
    <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${colorClasses}`}>
      {t('priority')} {translatedPriority}
    </span>
  );
};

const CitationTooltip: React.FC<{ text: string }> = ({ text }) => {
  const { t, language } = useLanguage();
  const dir = language === 'he' ? 'rtl' : 'ltr';
  const positionClass = language === 'he' ? 'left-0' : 'right-0';
  const arrowPositionClass = language === 'he' ? 'left-3' : 'right-3';
  
  return (
    <div className={`absolute bottom-full ${positionClass} mb-2 w-72 p-3 bg-slate-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none`} dir={dir}>
      <p className="font-mono text-xs text-slate-400 mb-1">{t('citation_label')}</p>
      {text}
      <div className={`absolute top-full ${arrowPositionClass} w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-slate-800`}></div>
    </div>
  );
};

interface ReportSectionCardProps {
    section: ReportSection;
    report: Report;
    checkedItems: Record<string, boolean>;
    onToggleCheck: (itemKey: string) => void;
    isCompleted: boolean;
}

const ReportSectionCard: React.FC<ReportSectionCardProps> = ({ section, report, checkedItems, onToggleCheck, isCompleted }) => {
  const { t } = useLanguage();
  const cardClasses = `bg-white p-6 rounded-xl border border-slate-200 shadow-md transition-all duration-500 ${isCompleted ? 'animate-swipe-out' : 'hover:shadow-lg'}`;

  return (
      <div className={cardClasses}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
          <PriorityBadge priority={section.priority} />
        </div>
        <p className="text-slate-600 mb-6">{section.summary}</p>
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">{t('report_action_items')}</h4>
          <ul className="space-y-3">
            {section.actionItems.map((item, index) => {
                const itemKey = `${section.title}-${index}`;
                const isChecked = checkedItems[itemKey] || false;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        id={itemKey}
                        checked={isChecked}
                        onChange={() => onToggleCheck(itemKey)}
                        className="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5 cursor-pointer"
                    />
                    <label htmlFor={itemKey} className={`flex-1 text-slate-700 transition-colors duration-300 cursor-pointer ${isChecked ? 'line-through text-slate-400' : ''}`}>
                      {item.text}
                    </label>
                    {report.citations[item.citationKey] && (
                       <div className="relative group flex-shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 hover:text-slate-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        <CitationTooltip text={report.citations[item.citationKey]} />
                      </div>
                    )}
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
  )
};

const CongratulationsCard: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-slate-200 text-center flex flex-col items-center">
            <CheckShieldIcon className="w-16 h-16 text-green-500 mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('congrats_title')}</h2>
            <p className="text-slate-600 max-w-lg mx-auto">{t('congrats_subtitle')}</p>
        </div>
    );
}

const ReportDisplay: React.FC<ReportDisplayProps> = ({ report, onStartOver }) => {
  const { t } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  const priorityOrder: Record<string, number> = { high: 1, medium: 2, low: 3 };
  
  const sortedSections = useMemo(() => {
    return [...report.sections].sort((a, b) => {
      const priorityA = priorityOrder[a.priority.toLowerCase()] || 4;
      const priorityB = priorityOrder[b.priority.toLowerCase()] || 4;
      return priorityA - priorityB;
    });
  }, [report.sections]);

  const handleToggleCheck = (itemKey: string, section: ReportSection) => {
    const newCheckedItems = { ...checkedItems, [itemKey]: !checkedItems[itemKey] };
    setCheckedItems(newCheckedItems);
  
    const allItemsChecked = section.actionItems.every((_, index) => {
        const key = `${section.title}-${index}`;
        return newCheckedItems[key];
    });

    if (allItemsChecked) {
        setTimeout(() => {
            setCompletedSections(prev => new Set(prev).add(section.title));
        }, 500); // Wait for animation
    }
  };
  
  const handleFullStartOver = () => {
      setCheckedItems({});
      setCompletedSections(new Set());
      onStartOver();
  }

  const visibleSections = sortedSections.filter(s => !completedSections.has(s.title));
  const allCompleted = sortedSections.length > 0 && visibleSections.length === 0;

  return (
    <div className="space-y-8">
      {!allCompleted && (
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('report_title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('report_subtitle')}
          </p>
        </div>
      )}
      
      <div className="space-y-6 transition-all duration-500">
        {allCompleted ? (
            <CongratulationsCard />
        ) : (
            visibleSections.map((section) => {
                const isCompleted = section.actionItems.every((_, index) => checkedItems[`${section.title}-${index}`]);
                return (
                    <ReportSectionCard
                        key={section.title}
                        section={section}
                        report={report}
                        checkedItems={checkedItems}
                        onToggleCheck={(itemKey) => handleToggleCheck(itemKey, section)}
                        isCompleted={isCompleted}
                    />
                );
            })
        )}
      </div>

      <div className="text-center pt-6">
        <button
          onClick={handleFullStartOver}
          className="bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-slate-800 transition-colors"
        >
          {t('report_start_over')}
        </button>
      </div>
    </div>
  );
};

export default ReportDisplay;