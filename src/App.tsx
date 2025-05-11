import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blog';
import BookTime from './components/BookTime';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Update title
    document.title = 'Abhishek Bhaduri | Principal Product Manager';
    
    return () => {
      // Clean up script on unmount
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Add grid pattern style
    const style = document.createElement('style');
    style.innerHTML = `
      .bg-grid-pattern {
        background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
        background-size: 20px 20px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Blog />
        <BookTime />
      </main>
      <Footer />
    </div>
  );
}

export default App;