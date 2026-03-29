import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-inner transition-all duration-500">
      <button
        onClick={() => setTheme('light')}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-white text-blue-600 shadow-sm' 
            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
        title="Giao diện sáng"
      >
        <Sun size={16} />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-slate-700 text-blue-400 shadow-sm' 
            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
        }`}
        title="Giao diện tối"
      >
        <Moon size={16} />
      </button>
    </div>
  );
};

export default ThemeToggle;
