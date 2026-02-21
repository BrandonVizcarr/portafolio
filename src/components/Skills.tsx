import { useI18n } from '../hooks/useI18n';
import { Layout, Server, Terminal, Cloud, Network, Bot, Cpu, Layers, Zap } from 'lucide-react';

export default function Skills() {
    const { t } = useI18n();

    const skills = [
        { name: 'Microservices', icon: <Network size={24} />, category: 'Architecture' },
        { name: 'Microfrontends', icon: <Layers size={24} />, category: 'Architecture' },
        { name: 'GCP', icon: <Cloud size={24} />, category: 'Cloud' },
        { name: 'Linux VPS', icon: <Terminal size={24} />, category: 'Infrastructure' },
        { name: 'OpenAI API', icon: <Bot size={24} />, category: 'AI / LLM' },
        { name: 'UiPath', icon: <Cpu size={24} />, category: 'Automation' },
        { name: 'Angular', icon: <Layout size={24} />, category: 'Frontend' },
        { name: 'React', icon: <Layout size={24} />, category: 'Frontend' },
        { name: 'Spring Boot', icon: <Zap size={24} />, category: 'Backend' },
        { name: 'Node.js', icon: <Server size={24} />, category: 'Backend' },
    ];

    return (
        <section id="skills" className="bg-gray-50 py-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {t.skills.title}
                    </h2>
                    <p className="text-lg text-gray-600">{t.skills.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center justify-center text-center group"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                            <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
