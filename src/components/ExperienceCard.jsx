export default function ExperienceCard({ experience, isEnglish }) {
  const lang = isEnglish ? "EN" : "FR";

  return (
    <div className="border border-pink-smile-text-color rounded-3xl p-6 bg-white shadow-sm max-w-md mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 border-pink-border-color rounded-xl flex items-center justify-center overflow-hidden border p-1">
            <img src={experience.logo} alt={experience.company} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-base font-bold text-primary-text-color">{experience.role[lang]}</h3>
            <p className="text-xs text-secondary-text-color">{experience.period[lang]}</p>
          </div>
        </div>
      </div>

      <ul className="space-y-1.5 text-xs text-text-long pl-4 list-disc">
        {experience.tasks.map((task, index) => (
          <li key={index} className="leading-relaxed">{task[lang]}</li>
        ))}
      </ul>
    </div>
  );
}