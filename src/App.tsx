import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { FAQ } from './pages/FAQ';
import { Quote } from './pages/Quote';
import { Contact } from './pages/Contact';
import { useTheme } from './hooks/useTheme';

function App() {
  // Initialize theme
  useTheme();

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;