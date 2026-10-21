import iconPath from "../assets/graduation.png";

export default function EducationCard({ education }) {
  return (
    <div className="border border-pink-smile-text-color rounded-3xl p-6 bg-white shadow-sm flex flex-col justify-between">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <img src={iconPath} alt="icône" className="w-6 h-6 object-contain" />
        </div>
        <div>
          <h3 className="text-base font-bold text-primary-text-color">{education.title}</h3>
          <p className="text-xs font-semibold text-pink-secondary-text-color mt-1">{education.school}</p>
        </div>
      </div>
      <div className="mt-6 pt-3 border-t border-rose-50 text-xs text-secondary-text-color font-medium">
        {education.period}
      </div>
    </div>
  );
}