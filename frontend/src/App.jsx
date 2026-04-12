import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DealsSection from './components/DealsSection';
import CategoryGrid from './components/CategoryGrid';
import InquiryForm from './components/InquiryForm'; // New
import RecommendedItems from './components/RecommendedItems'; // New
import ExtraServices from './components/ExtraServices'; // New
import SuppliersRegion from './components/SuppliersRegion'; // New
import Newsletter from './components/Newsletter'; // New

function App() {
  const homeItems = [
    { name: "Soft chairs", price: "19", img: "/assets/chair.png" },
    { name: "Sofa & chair", price: "19", img: "/assets/lamp.png" },
    { name: "Kitchen dishes", price: "19", img: "/assets/dishes.png" },
    { name: "Smart watches", price: "19", img: "/assets/pot.png" }, // matches image 
    { name: "Kitchen mixer", price: "100", img: "/assets/mixer.png" },
    { name: "Blenders", price: "39", img: "/assets/blender.png" },
    { name: "Home appliance", price: "19", img: "/assets/appliance.png" },
    { name: "Coffee maker", price: "10", img: "/assets/coffee.png" },
  ];

  const electronicsItems = [
    { name: "Smart watches", price: "19", img: "/assets/watch2.png" },
    { name: "Cameras", price: "89", img: "/assets/camera.png" },
    { name: "Headphones", price: "10", img: "/assets/headphones2.png" },
    { name: "Smart watches", price: "90", img: "/assets/kettle.png" },
    { name: "Gaming set", price: "35", img: "/assets/gaming.png" },
    { name: "Laptops & PC", price: "340", img: "/assets/laptop2.png" },
    { name: "Smartphones", price: "19", img: "/assets/phone.png" },
    { name: "Electric kettle", price: "240", img: "/assets/redphone.png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <Navbar />
      <Hero />
      <DealsSection />
      
      <CategoryGrid 
        title="Home and outdoor" 
        bannerImg="/assets/home-banner.png" 
        items={homeItems} 
        bannerBg="bg-orange-100" 
      />
      
      <CategoryGrid 
        title="Consumer electronics and gadgets" 
        bannerImg="/assets/elec-banner.png" 
        items={electronicsItems} 
        bannerBg="bg-blue-100" 
      />
      <InquiryForm />
      <RecommendedItems />
      <ExtraServices />
      <SuppliersRegion />
      <Newsletter />
    </div>
  );
}

export default App;