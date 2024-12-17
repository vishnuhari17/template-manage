import SearchBar from './SearchBar';
import FilterButton from './FilterButton';
import ViewToggle from './ViewToggle';

export default function Filters({ search, onSearchChange, view, onViewChange }) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-1 items-center space-x-3 min-w-0">
        <div className="w-72">
          <SearchBar value={search} onChange={onSearchChange} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ViewToggle view={view} onViewChange={onViewChange} />
        <FilterButton label="Recently added" />
      </div>
    </div>
  );
}