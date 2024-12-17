import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTemplate, getTemplate, updateTemplate } from '../api/templates';
import { toast } from 'react-toastify';

export default function TemplateEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [template, setTemplate] = useState({
    template_name: '',
    template_content: '',
  });

  useEffect(() => {
    const fetchTemplate = async () => {
      if (id) {
        try {
          const template = await getTemplate(id);
          setTemplate(template[0]);
        } catch (error) {
          console.error('Error fetching template:', error);
        }
      }
    };

    fetchTemplate();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateTemplate(id, template);
      } else {
        await createTemplate({
          ...template,
          creation_date: new Date().toISOString(),
          type: 'usercreated',
        });
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving template:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="justify-between items-center bg-white shadow-sm p-4">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 ml-4"
          >
            ← Back
          </button>
          <h1 className="ml-4 text-2xl font-semibold text-gray-900">{id ? 'Edit Template' : 'Create'}</h1>
        </div>
        
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">{id ? 'Edit a template' : 'Create a template'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Template name
              </label>
              <input
                type="text"
                id="name"
                value={template.template_name}
                onChange={(e) => setTemplate({ ...template, template_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Template Content
              </label>
              <textarea
                id="content"
                value={template.template_content}
                onChange={(e) => setTemplate({ ...template, template_content: e.target.value })}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              {id ? 'Edit' : 'Save'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}