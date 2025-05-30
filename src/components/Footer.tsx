import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Abhishek Bhaduri</h3>
            <p className="text-gray-400">Product & Technology Advisor</p>
          </div>
        </div>
          
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/abhishekbhaduri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:abhishekuncmba@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://abhishekec6.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Substack"
            >
              <ExternalLink size={20} />
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center space-x-4">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm">Experience</a>
            <a href="#blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
            <a href="#book" className="text-gray-400 hover:text-white transition-colors text-sm">Book a Time</a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Abhishek Bhaduri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;