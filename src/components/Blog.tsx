import { ExternalLink, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlogPost {
  title: string;
  url: string;
  date: string;
  summary: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Senior Living Sales: From Geriatric Grind to AI-Powered Nirvana!",
    url: "https://abhishekec6.substack.com/p/senior-living-sales-from-geriatric",
    date: "May 5, 2025",
    summary: "Exploring how Agentic AI is changing the senior living real state space focussed on sales and personalization.",
    imageUrl: "https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "The future of PCs",
    url: "https://abhishekec6.substack.com/p/goldrush-for-ai-pcs",
    date: "June 05, 2024",
    summary: "So how are AI PCs boosting the overall value of PC shipments from US$225B in 2024 to over US$270B in 2028?",
    imageUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Navigating the future of Quick-Commerce",
    url: "https://abhishekec6.substack.com/p/navigating-the-future-of-quick-commerce",
    date: "August 18, 2024",
    summary: "Key insights into the US Quick commerce space and challenges that can be solved with platform based technologies.",
    imageUrl: "https://images.pexels.com/photos/7691577/pexels-photo-7691577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughts and insights on product management, technology, and innovation. Find more on my 
            <a 
              href="https://abhishekec6.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              Substack
            </a>.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Clock size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;