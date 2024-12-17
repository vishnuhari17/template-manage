import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateList from './pages/TemplateList';
import TemplateEditor from './pages/TemplateEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplateList />} />
        <Route path="/templates/create" element={<TemplateEditor />} />
        <Route path="/templates/:id" element={<TemplateEditor />} />
      </Routes>
    </Router>
  );
}

export default App;