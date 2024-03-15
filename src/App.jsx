import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NotFound } from './Pages/NotFoundPage';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Restaurant1 } from './Pages/Restaurant1';
import { Restaurant2 } from './Pages/Restaurant2';

import { Header } from './components/PageDetails/Header';
import { Footer } from './components/PageDetails/Footer';
const App = () => {
  return (
    <Router>
      < Header />
        <Routes>
          <Route path="*" element={< NotFound />} />
          <Route exact path="/" element={< Home />} />
          <Route path="/About" element={< About />} />
          <Route path="/Contact" element={< Contact />} />
          <Route path="/Restaurant1" element={< Restaurant1 />} />
          <Route path="/Restaurant2" element={< Restaurant2 />} />
      </Routes>
      < Footer />
    </Router>
  );
};

export default App;