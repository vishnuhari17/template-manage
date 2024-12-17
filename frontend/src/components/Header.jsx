import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-900">Templates</h1>
      <div className="flex gap-3">
        <button
          onClick={() => navigate('/templates/create')}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800"
        >
          Create blank email
        </button>
      </div>
    </div>
  );
}