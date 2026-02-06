import { useI18n } from '../hooks/useI18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useI18n();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">Portfolio</div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t.nav.projects}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t.nav.contact}
          </button>

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
