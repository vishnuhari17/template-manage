import { useState } from 'react';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import Filters from '../components/Filters';
import TemplateGrid from '../components/TemplateGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useTemplates } from '../hooks/useTemplates';

export default function TemplateList() {
  const [activeTab, setActiveTab] = useState('library');
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');
  const { templates, loading, error } = useTemplates();

  const filteredTemplates = templates.filter(template =>
    template.template_name.toLowerCase().includes(search.toLowerCase()) && template.type === activeTab
  );

  return (
    <div className="max-w mx-auto px-2 sm:px-4 lg:px-2 py-8">
      <Header />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <Filters
        search={search}
        onSearchChange={setSearch}
        view={view}
        onViewChange={setView}
      />

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <TemplateGrid templates={filteredTemplates} view={view} />
      )}
    </div>
  );
}