import { Download } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import engCv from '../assets/BrandonVizcarraCv.pdf';

export default function Hero() {
  const { t } = useI18n();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = engCv;
    link.download = 'BrandonVizcarra_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          {t.hero.greeting} <span className="text-gray-700">Brandon</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-6">{t.hero.role}</p>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          {t.hero.description}
        </p>

        <button
          onClick={handleDownloadCV}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Download className="w-5 h-5" />
          {t.hero.downloadCV}
        </button>
      </div>
    </section>
  );
}
