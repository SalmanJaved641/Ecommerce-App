import { User } from 'lucide-react';
const Hero = () => {
  const categories = [
    "Automobiles", "Clothes and wear", "Home interiors", 
    "Computer and tech", "Tools, equipments", "Sports and outdoor", 
    "Animal and pets", "Machinery tools", "More category"
  ];

  return (
    <section className="bg-gray-100 py-5 px-4 md:px-10">
      <div className="bg-white border rounded-md p-4 flex flex-col lg:flex-row gap-4">
        
        {/* Left Sidebar */}
        <ul className="w-full lg:w-1/4 flex flex-col gap-1">
          {categories.map((cat, index) => (
            <li 
              key={index} 
              className={`p-2 rounded-md cursor-pointer hover:bg-blue-50 hover:font-semibold ${index === 0 ? 'bg-blue-100 font-semibold' : ''}`}
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Main Banner */}
        <div className="flex-grow relative h-[380px] rounded-md overflow-hidden">
          <img 
            src="/assets/banner.jpg" // Change this to your image name
            alt="Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-10 left-10 max-w-xs">
            <p className="text-xl">Latest trending</p>
            <h1 className="text-3xl font-bold my-2">Electronic items</h1>
            <button className="bg-white px-4 py-2 rounded-md font-semibold mt-4 shadow-sm hover:bg-gray-50">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="w-full lg:w-1/5 flex flex-col gap-3">
          {/* Login Card */}
          <div className="bg-blue-100 p-4 rounded-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-300 h-10 w-10 rounded-full flex items-center justify-center text-white">
                <User />
              </div>
              <p className="text-sm">Hi, user<br/>let's get started</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-2 text-sm">Join now</button>
            <button className="w-full bg-white text-blue-600 py-2 rounded-md text-sm border">Log in</button>
          </div>
          
          {/* Promo Card 1 */}
          <div className="bg-orange-500 text-white p-4 rounded-md flex-1">
            <p>Get US $10 off with a new supplier</p>
          </div>
          
          {/* Promo Card 2 */}
          <div className="bg-teal-500 text-white p-4 rounded-md flex-1">
            <p>Send quotes with supplier preferences</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;