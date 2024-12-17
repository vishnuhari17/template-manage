import { Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

export default function ViewToggle({ view, onViewChange }) {
  const handleViewChange = (newView) => {
    if (view !== newView) {
      onViewChange(newView);
    }
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-md">
      <button
        onClick={() => handleViewChange('grid')}
        className={classNames(
          'p-1.5 rounded',
          view === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
        )}
      >
        <Squares2X2Icon className="h-5 w-5 text-gray-500" />
      </button>
      <button
        onClick={() => handleViewChange('list')}
        className={classNames(
          'p-1.5 rounded',
          view === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
        )}
      >
        <ListBulletIcon className="h-5 w-5 text-gray-500" />
      </button>
    </div>
  );
}