import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NotFound } from './Pages/NotFoundPage';
import { Home } from './Pages/Home';
import { Restaurant1 } from './Pages/Restaurant1';
import { Restaurant2 } from './Pages/Restaurant2';

import { Header } from './components/PageDetails/Header';
const App = () => {
  return (
    <Router>
      < Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/Restaurant1" element={<Restaurant1 />} />
          <Route path="/Restaurant2" element={<Restaurant2 />} />
      </Routes>
    </Router>
  );
};

export default App;