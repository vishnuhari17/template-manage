import { format } from 'date-fns';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTemplate } from '../api/templates';

export default function TemplateCard({ template }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEdit = () => {
    navigate(`/templates/${template.template_id}`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this template?')) {
      deleteTemplate(template.template_id).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 relative">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <div className="bg-gray-100 rounded-lg p-4 overflow-hidden h-96">
          <div dangerouslySetInnerHTML={{ __html: template.html }} />
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            {template.template_name}
            {template.type === 'usercreated' ? (
              <span></span>
            ) : (
              <span className="ml-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Partner Created
              </span>
            )}
          </h3>
          {template.type === 'usercreated' ? (
            <p className="text-sm text-gray-500">
              {format(new Date(template.creation_date), 'MMMM d, yyyy \'at\' h:mm a')}
            </p>
          ) : (
            <p className="text-sm text-gray-500">Created by {template.created_by}</p>
          )}
        </div>
        <div className="relative">
          <button onClick={handleMenuToggle} className="p-2 hover:bg-gray-100 rounded-full">
            <EllipsisHorizontalIcon className="w-5 h-5 text-gray-500" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button onClick={handleEdit} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Edit
              </button>
              <button onClick={handleDelete} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}