import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import TestsPage from '../pages/TestsPage';
import TestDetailPage from '../pages/TestDetailPage';
import MyPage from '../pages/MyPage';
import AdminPage from '../pages/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/tests/:id" element={<TestDetailPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
