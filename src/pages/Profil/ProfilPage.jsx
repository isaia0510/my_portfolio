import SmileTitle from "../../components/SmileTitle";
import EducationCard from "../../components/EducationCard";
import ExperienceCard from "../../components/ExperienceCard";
import SkillCategoryCard from "../../components/SkillCategoryCard";
import { profileData } from "../../data/profileData";

import codeIcon from "../../assets/code.png";
import databaseIcon from "../../assets/base-de-donnees.png";
import languageIcon from "../../assets/langue.png";
import toolsIcon from "../../assets/outils.png";

export default function ProfilPage({t, isEnglish}) {
    return(
        <div className="max-w-6xl mx-auto px-6 py-8 flex-1 w-full space-y-12">
            {/* SECTION EDUCATION */}
            <section>
                <SmileTitle>{t.education}</SmileTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {profileData.educations.map((edu, index) => (
                    <EducationCard key={index} education={edu} isEnglish={isEnglish}/>
                ))}
                </div>
            </section>

            {/* SECTION EXPERIENCE PROFESSIONNELLE */}
            <section>
                <SmileTitle>{t.experience}</SmileTitle>
                <div className="space-y-6">
                {profileData.experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} isEnglish={isEnglish} />
                ))}
                </div>
            </section>

            {/* SECTION COMPETENCES ET LANGUES */}
            <section>
                <SmileTitle>{t.skills}</SmileTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategoryCard title="Frontend" iconPath={codeIcon} items={profileData.skills.frontend} isEnglish={isEnglish} />
                <SkillCategoryCard title="Backend" iconPath={codeIcon} items={profileData.skills.backend} isEnglish={isEnglish} />
                <SkillCategoryCard title={isEnglish ? "Databases" : "Base de données"} iconPath={databaseIcon} items={profileData.skills.database} isEnglish={isEnglish} />
                <SkillCategoryCard title={isEnglish ? "Languages" : "Langues"} iconPath={languageIcon} items={profileData.skills.languages} isEnglish={isEnglish} />
                </div>
            </section>


            {/* SECTION OUTILS */}
            <section>
                <SmileTitle>{t.tools}</SmileTitle>
                <div className="max-w-3xl mx-auto">
                <SkillCategoryCard title={t.environment} iconPath={toolsIcon} items={profileData.skills.tools} isEnglish={isEnglish}/>
                </div>
            </section>
        </div>
    );
}