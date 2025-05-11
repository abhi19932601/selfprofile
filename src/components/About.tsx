import { Mail, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-blue-100">
                <img
                  src="https://media-hosting.imagekit.io/82102603ac574401/CA7C9435-D8E1-45CD-8E61-E208C1C49672.JPG?Expires=1841507178&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NtJJbQ3ezKpAyVD3e4NaZ-JIy21WKV55rIqCguOZyQusQ~wppwoimQowfC8hAIXIqts7eQf8A4yB9R1zG5Iccade9AQp8fTSO1fXYoxdKQX5q-c~edZd83sSKKrgYvs-CE4MSUFvDMIS9B8EsBXj4av~beuCR04G3VS7cJlntV-DeDQq29GVMGNLXfcatntWZApzngCnT7BWHAlOkc9VOxlCGwThVcW63Ck2i4kAufc4szeu0-cyKDCwnfqF33zJk58f7lbshitQQ5~2vwP9rGTCiBvv15qqRDc5bVYw04u590BuXbRM1axbSXcrKAJACCMlzQFLU12PC2MGLoJN9w__"
                  alt="Abhishek Bhaduri"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <a
                  href="https://www.linkedin.com/in/abhishekbhaduri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:abhishekuncmba@gmail.com"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                I'm a strategic product leader with extensive experience in AI, SaaS platforms, and consumer technology at companies like Dell Technologies and Swiggy. With an MBA from UNC Kenan-Flagler and an Electrical Engineering Bachelors from MIT Manipal with a technical & startup background, I've advised C-suite executives and driven multimillion-dollar initiatives that consistently deliver exceptional business outcomes.
              </p>
              <p className="text-gray-700 mb-4">
                My expertise spans developing AI-powered solutions, optimizing product strategies, and orchestrating successful go-to-market launches across global markets. I excel at translating complex technical capabilities into revenue-generating products, having increased sales pipelines by $45M and driven cost savings of over $10M through innovative product development and strategic partnerships.
              </p>
              <p className="text-gray-700 mb-4">
                I'm passionate about mentoring startups and have facilitated several acquisitions, bringing valuable insights from my experience scaling products to 4M+ users across 134 cities. My approach combines data-driven strategy with creative execution to build products that not only meet but exceed business objectives while significantly improving customer satisfaction metrics. Lastly, the picture on the left is my dog Noodles, she is what I live and inspire to do better each day
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm">Product Strategy</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm">AI Solutions</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm">Strategic Innovation</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm">Startup Mentorship</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm">Go-to-Market Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;