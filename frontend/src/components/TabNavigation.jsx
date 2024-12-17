import classNames from 'classnames';

export default function TabNavigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'library', name: 'Template Library' },
    { id: 'usercreated', name: 'Saved Templates' },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={classNames(
              'py-4 px-1 border-b-2 font-medium text-sm',
              activeTab === tab.id
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
}