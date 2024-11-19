import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { RationList } from './pages/RationList/RationList';
import { CreateRation } from './pages/CreateRation/CreateRation';
import { EditRation } from './pages/EditRation/EditRation';
import { NotFound } from './pages/NotFound/NotFound';

export const App = () => {
  return (
    <Router >
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/rations" replace />}  />
          <Route path="/rations" element={<RationList />} />
          <Route path="/rations/new" element={<CreateRation />} />
          <Route path="/rations/:id/edit" element={<EditRation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};