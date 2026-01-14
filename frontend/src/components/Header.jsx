import { User, MessageSquare, Heart, ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b py-4 px-4 md:px-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-md">
           <ShoppingCart className="text-white w-6 h-6" />
        </div>
        <span className="text-blue-500 text-2xl font-bold tracking-tight">Brand</span>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 mx-10 max-w-2xl">
        <div className="flex w-full border-2 border-blue-600 rounded-md overflow-hidden">
          <input 
            type="text" 
            placeholder="Search" 
            className="flex-grow px-4 py-2 outline-none"
          />
          <select className="border-l px-2 bg-white outline-none text-sm">
            <option>All category</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2 font-medium hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      {/* Icons */}
      <div className="flex gap-5 text-gray-500">
        <div className="flex flex-col items-center cursor-pointer">
          <User size={20} />
          <span className="text-xs">Profile</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <MessageSquare size={20} />
          <span className="text-xs">Message</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <Heart size={20} />
          <span className="text-xs">Orders</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <ShoppingCart size={20} />
          <span className="text-xs">My cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;