import { Mail, Github, Linkedin } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

export default function Contact() {
  const { t } = useI18n();

  const contacts = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'vizcarrabrandon25@gmail.com',
      href: 'mailto:vizcarrabrandon25@gmail.com'
    },
    {
      icon: Github,
      label: t.contact.github,
      value: 'github.com/BrandonVizcarr',
      href: 'https://github.com/BrandonVizcarr'
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: 'linkedin.com/in/brandon-vizcarra-116942319',
      href: 'https://www.linkedin.com/in/brandon-vizcarra-116942319'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-white py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <Icon className="w-8 h-8 text-gray-900 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-600 text-center break-all">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
