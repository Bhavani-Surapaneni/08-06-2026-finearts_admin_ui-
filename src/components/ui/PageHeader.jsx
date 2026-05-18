import Button from "./Button";

export default function PageHeader({ title, description, actions }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold gradient-text">{title}</h1>
        {description && <p className="text-gray-400 mt-1">{description}</p>}
      </div>

      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}
