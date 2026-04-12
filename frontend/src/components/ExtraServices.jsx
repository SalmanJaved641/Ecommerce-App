import { ShieldCheck, Headphones, Globe, Send, Search } from 'lucide-react';

const ExtraServices = () => {
  const services = [
    { title: "Source from Industry Hubs", icon: <Search size={24} />, img: "/assets/service1.png" },
    { title: "Customize Your Products", icon: <Globe size={24} />, img: "/assets/service2.png" },
    { title: "Fast, Reliable Shipping", icon: <Send size={24} />, img: "/assets/service3.png" },
    { title: "Product Monitoring & Inspection", icon: <ShieldCheck size={24} />, img: "/assets/service4.png" },
  ];

  return (
    <section className="px-4 md:px-10 my-10">
      <h2 className="text-2xl font-bold mb-6">Our extra services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white border rounded-md overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition">
            <div className="h-32">
              <img src={service.img} alt={service.title} className="w-full h-full" />
            </div>
            <div className="p-4 relative">
              {/* Icon Circle */}
              <div className="absolute -top-6 right-4 bg-blue-100 border-4 border-white p-2 rounded-full text-blue-600">
                {service.icon}
              </div>
              <p className="font-medium mt-2 max-w-[150px]">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraServices;