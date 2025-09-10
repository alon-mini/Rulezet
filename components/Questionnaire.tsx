import React from 'react';
import { FormData } from '../types';
import { SparklesIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

interface QuestionnaireProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ formData, setFormData, onSubmit }) => {
  const { t } = useLanguage();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'radio') {
        setFormData(prev => ({...prev, [name]: value}));
    }
    else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'number' ? Number(value) : value,
      }));
    }
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">{t('q_title')}</h2>
      <p className="text-slate-600 mb-8 text-center">{t('q_subtitle')}</p>
      
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-8">
        {/* Section 1: Business Size */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-slate-200 pt-8">
          <div>
            <label htmlFor="size" className="block text-lg font-semibold text-slate-800 mb-2">{t('q_size')}</label>
            <input 
              type="number" 
              name="size" 
              id="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              min="1"
            />
            <p className="text-sm text-slate-500 mt-2">{t('q_size_desc')}</p>
          </div>
          <div>
            <label htmlFor="seatingCapacity" className="block text-lg font-semibold text-slate-800 mb-2">{t('q_seating')}</label>
            <input 
              type="number" 
              name="seatingCapacity" 
              id="seatingCapacity"
              value={formData.seatingCapacity}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              min="0"
            />
            <p className="text-sm text-slate-500 mt-2">{t('q_seating_desc')}</p>
          </div>
        </div>

        {/* Section 2: Offerings */}
        <div className="space-y-6 border-t border-slate-200 pt-8">
            <h3 className="text-xl font-semibold text-slate-800">{t('q_offerings')}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <input 
                        type="checkbox"
                        id="servesAlcohol"
                        name="servesAlcohol"
                        checked={formData.servesAlcohol}
                        onChange={handleChange}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <div>
                        <label htmlFor="servesAlcohol" className="font-semibold text-slate-800">{t('q_serves_alcohol')}</label>
                        <p className="text-sm text-slate-500">{t('q_serves_alcohol_desc')}</p>
                    </div>
                </div>
                 <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <input 
                        type="checkbox"
                        id="kosher"
                        name="kosher"
                        checked={formData.kosher}
                        onChange={handleChange}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <div>
                        <label htmlFor="kosher" className="font-semibold text-slate-800">{t('q_kosher')}</label>
                        <p className="text-sm text-slate-500">{t('q_kosher_desc')}</p>
                    </div>
                </div>
            </div>
             <div>
                <label className="block text-lg font-semibold text-slate-800 mb-3">{t('q_food_type')}</label>
                <div className="flex flex-wrap gap-4">
                  {(['dairy', 'meat', 'both'] as const).map(type => (
                    <label key={type} className="flex items-center gap-2 bg-slate-50 p-3 pr-4 rounded-lg border border-slate-200 cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-300">
                      <input type="radio" name="foodType" value={type} checked={formData.foodType === type} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span className="font-medium">{t(type)}</span>
                    </label>
                  ))}
                </div>
            </div>
             <div>
                <label className="block text-lg font-semibold text-slate-800 mb-3">{t('q_delivery')}</label>
                <div className="flex flex-wrap gap-4">
                  {(['none', 'private', 'partnered'] as const).map(type => (
                    <label key={type} className="flex items-center gap-2 bg-slate-50 p-3 pr-4 rounded-lg border border-slate-200 cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-300">
                      <input type="radio" name="deliveryService" value={type} checked={formData.deliveryService === type} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span className="font-medium">{t(type)}</span>
                    </label>
                  ))}
                </div>
            </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-8 border-t border-slate-200">
          <button type="submit" className="bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto">
            <SparklesIcon className="w-6 h-6" />
            {t('q_generate_button')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
