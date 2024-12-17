import TemplateCard from './TemplateCard';

export default function TemplateGrid({ templates, view }) {
  if (!templates.length) {
    return (
      <div className="text-center p-8 text-gray-500">
        No templates found
      </div>
    );
  }

  return (
    <div className={view === 'grid' ? 'mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'mt-8 list'}>
      {templates.map((template) => (
        <TemplateCard key={template.template_id} template={template} />
      ))}
    </div>
  );
}