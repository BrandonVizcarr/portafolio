import { useI18n } from '../hooks/useI18n';
import { User } from 'lucide-react';

export default function About() {
    const { t } = useI18n();

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-blue-500">
                                <User size={80} className="text-blue-500" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                                <User size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center md:justify-start gap-3">
                            {t.about.title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t.about.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
