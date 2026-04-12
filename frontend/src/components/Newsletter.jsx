import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center mt-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Subscribe on our newsletter</h2>
        <p className="text-gray-500 mb-6">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        
        <form className="flex flex-col sm:flex-row gap-2 justify-center">
          <div className="relative flex-grow max-w-sm mx-auto sm:mx-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Mail size={18} />
            </span>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-10 pr-4 py-2 border rounded-md outline-none focus:border-blue-500 bg-white"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;