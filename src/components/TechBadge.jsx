export default function TechBadge({ name }) {
  return (
    <span className="border border-pink-secondary-text-color text-primary-text-color text-xs px-4 py-1.5 rounded-full inline-block">
      {name}
    </span>
  );
}