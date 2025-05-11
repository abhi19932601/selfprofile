import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-blue-600 block mt-2">Abhishek Bhaduri</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Product & Strategy Manager with a passion for technology, strategy, fast growing startups and tech-innovation
          </p>
          <button
            onClick={scrollToAbout}
            className="animate-bounce mt-8 p-2 rounded-full bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;