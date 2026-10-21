import TechBadge from './TechBadge';

export default function ProjectCard({ t, project, isEnglish }) {
  return (
    <div className="border border-pink-secondary-text-color rounded-3xl p-6 bg-white shadow-sm max-w-6xl mx-auto mb-8">
      {/* En-tête du projet */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-pink-secondary-text-color rounded-xl flex items-center justify-center text-white font-bold">
            {/* Icône ou miniature */}
            <span className="text-xl">{project.id}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-pink-smile-text-color">{project.title[isEnglish ? 'EN' : 'FR']}</h3>
            <p className="text-xs text-secondary-text-color">{project.date[isEnglish ? 'EN' : 'FR']} &nbsp;|&nbsp; {project.team[isEnglish ? 'EN' : 'FR']}</p>
          </div>
        </div>

        {/* Boutons d'action du projet */}
        <div className="flex items-center space-x-3">
          {project.websiteUrl && (
            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-300 text-primary-text-color font-medium px-4 py-1.5 rounded-full text-xs transition-all"
            >
              Site web
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-300 text-primary-text-color font-medium px-4 py-1.5 rounded-full text-xs transition-all"
            >
              Lien github
            </a>
          )}
        </div>
      </div>

      {/* Corps du projet */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Aperçu image */}
        <div className="w-full md:w-5/12 rounded-2xl overflow-hidden shadow-inner p-1">
          <img src={project.image} alt={project.title[isEnglish ? 'EN' : 'FR']} className="w-full h-auto rounded-xl object-cover" />
        </div>

        {/* Description & Fonctionnalités */}
        <div className="flex-1 space-y-4">
          <p className="text-primary-text-color text-sm leading-relaxed">
            {project.description[isEnglish ? 'EN' : 'FR']}
          </p>

          <div>
            <h4 className="text-pink-secondary-text-color font-semibold text-xs uppercase tracking-wider mb-1">{t.featureTitle}</h4>
            <ul className="list-disc pl-4 space-y-1 text-xs text-text-long marker:text-pink-secondary-text-color">
              {project.features.map((feature, index) => (
                <li key={index}>{feature[isEnglish ? 'EN' : 'FR']}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Technologies utilisées */}
      <div className="mt-8 pt-4 border-t border-rose-100">
        <h4 className="text-pink-secondary-text-color font-semibold text-xs uppercase tracking-wider mb-3">{t.techTitle}</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}