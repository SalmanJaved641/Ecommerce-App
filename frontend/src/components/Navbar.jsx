import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b py-3 px-4 md:px-10 flex items-center justify-between text-sm font-medium">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <Menu size={20} />
          <span>All category</span>
        </div>
        <ul className="hidden md:flex gap-6 items-center">
          <li className="cursor-pointer hover:text-blue-600">Hot offers</li>
          <li className="cursor-pointer hover:text-blue-600">Gift boxes</li>
          <li className="cursor-pointer hover:text-blue-600">Projects</li>
          <li className="cursor-pointer hover:text-blue-600">Menu item</li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            Help <ChevronDown size={14} />
          </li>
        </ul>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-1 cursor-pointer">
          English, USD <ChevronDown size={14} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Ship to 🇩🇪 <ChevronDown size={14} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;