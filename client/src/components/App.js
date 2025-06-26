import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import TestsPage from '../pages/TestsPage';
import TestDetailPage from '../pages/TestDetailPage';
import SearchPage from '../pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/tests/:id" element={<TestDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
