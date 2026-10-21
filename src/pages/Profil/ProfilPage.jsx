import SmileTitle from "../../components/SmileTitle";
import EducationCard from "../../components/EducationCard";
import ExperienceCard from "../../components/ExperienceCard";
import SkillCategoryCard from "../../components/SkillCategoryCard";
import { profileData } from "../../data/profileData";

import codeIcon from "../../assets/code.png";
import databaseIcon from "../../assets/base-de-donnees.png";
import languageIcon from "../../assets/langue.png";
import toolsIcon from "../../assets/outils.png";

export default function ProfilPage() {
    return(
        <div className="max-w-6xl mx-auto px-6 py-8 flex-1 w-full space-y-12">
            {/* SECTION EDUCATION */}
            <section>
                <SmileTitle>Education</SmileTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {profileData.educations.map((edu, index) => (
                    <EducationCard key={index} education={edu} />
                ))}
                </div>
            </section>

            {/* SECTION EXPERIENCE PROFESSIONNELLE */}
            <section>
                <SmileTitle>Experience professionnelle</SmileTitle>
                <div className="space-y-6">
                {profileData.experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
                </div>
            </section>

            {/* SECTION COMPETENCES ET LANGUES */}
            <section>
                <SmileTitle>Competences et langues</SmileTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategoryCard title="Frontend" iconPath={codeIcon} items={profileData.skills.frontend} />
                <SkillCategoryCard title="Backend" iconPath={codeIcon} items={profileData.skills.backend} />
                <SkillCategoryCard title="Base de données" iconPath={databaseIcon} items={profileData.skills.database} />
                <SkillCategoryCard title="Langues" iconPath={languageIcon} items={profileData.skills.languages} />
                </div>
            </section>


            {/* SECTION OUTILS */}
            <section>
                <SmileTitle>Outils</SmileTitle>
                <div className="max-w-3xl mx-auto">
                <SkillCategoryCard title="Environnement de travail" iconPath={toolsIcon} items={profileData.skills.tools} />
                </div>
            </section>
        </div>
    );
}