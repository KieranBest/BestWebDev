import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Restaurant1 } from './Pages/Restaurant1';
import { NotFound } from './Pages/NotFoundPage';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/Restaurant1" element={<Restaurant1 />} />
      </Routes>
    </Router>
  );
};

export default App;