import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
  
    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(e.target.value);
    };
  
    return (
      <select
        value={i18n.language}
        onChange={changeLanguage}
        className="px-3 py-2 rounded-md text-sm border border-lime-400 bg-slate-800 text-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 w-full sm:w-auto"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    );
  };
  

export default LanguageSelector;
