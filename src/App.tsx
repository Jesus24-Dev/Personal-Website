import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import WorkflowDetail from './components/Workflow/WorkflowDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/workflows/:id" element={<WorkflowDetail />} />
    </Routes>
  );
}

export default App;