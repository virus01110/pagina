import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Comments from './pages/Comments';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  const snowflakes = Array.from({ length: 10 }).map((_, i) => <div key={i} className="snowflake"></div>);

  return (
    <Router>
      <div className="snowfall">{snowflakes}</div>
      <div 
        className="d-flex flex-column min-vh-100" 
        data-theme={theme} 
      >
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
