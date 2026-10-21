import SmileTitle from "../../components/SmileTitle";
import ProjectCard from "../../components/ProjectCard";
import { projectsData } from "../../data/projectsData";

export default function ProjectsPage({ t, isEnglish}) {
  containerName: "max-w-6xl mx-auto px-6 py-8 flex-1 w-full"
  
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 flex-1 w-full">
      <SmileTitle>{t.title}</SmileTitle>

      <div className="space-y-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} isEnglish={isEnglish} t={t}/>
        ))}
      </div>
    </div>
  );
}