import { Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const languages = [
    { code: 'es' as const, label: 'ES' },
    { code: 'en' as const, label: 'EN' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 text-sm font-medium transition-colors ${language === lang.code
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
