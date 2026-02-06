import { Github, ExternalLink } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
}

export default function Projects() {
  const { t } = useI18n();

  const projects: Project[] = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      githubUrl: 'https://github.com/tuusuario/proyecto1',
      demoUrl: 'https://proyecto1.demo',
      tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      githubUrl: 'https://github.com/tuusuario/proyecto2',
      tags: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      githubUrl: 'https://github.com/tuusuario/proyecto3',
      demoUrl: 'https://proyecto3.demo',
      tags: ['Vue.js', 'Firebase', 'TailwindCSS']
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-gray-600">{t.projects.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">{t.projects.viewGithub}</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{t.projects.demo}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
