import TechBadge from './TechBadge';

export default function SkillCategoryCard({ title, iconPath, items }) {
  return (
    <div className="border border-pink-smile-text-color rounded-3xl p-6 bg-white shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-brand-rose">
            <img src={iconPath} alt="icône" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="text-sm font-bold tracking-wider text-primary-text-color uppercase">{title}</h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <TechBadge key={index} name={item} />
        ))}
      </div>
    </div>
  );
}