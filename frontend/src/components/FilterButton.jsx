import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FilterButton({ label }) {
  return (
    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      {label}
      <ChevronDownIcon className="ml-2 h-4 w-4" />
    </button>
  );
}