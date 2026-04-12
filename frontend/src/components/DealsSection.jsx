const DealsSection = () => {
  const deals = [
    { name: "Smart watches", discount: "-25%", img: "/assets/watch2.png" },
    { name: "Laptops", discount: "-15%", img: "/assets/laptop2.png" },
    { name: "GoPro cameras", discount: "-40%", img: "/assets/camera.png" },
    { name: "Headphones", discount: "-25%", img: "/assets/headphones2.png" },
    { name: "Canon cameras", discount: "-25%", img: "/assets/canon2.png" },
  ];

  return (
    <section className="px-4 md:px-10 my-5">
      <div className="bg-white border rounded-md flex flex-col md:flex-row overflow-hidden">
        {/* Countdown Box */}
        <div className="p-6 border-r w-full md:w-64">
          <h3 className="text-xl font-bold">Deals and offers</h3>
          <p className="text-gray-400 mb-4">Hygiene equipments</p>
          <div className="flex gap-2">
            {[ {v:"04", u:"Days"}, {v:"13", u:"Hour"}, {v:"34", u:"Min"}, {v:"56", u:"Sec"} ].map((t, i) => (
              <div key={i} className="bg-gray-700 text-white rounded-md p-2 w-12 text-center">
                <p className="font-bold leading-tight">{t.v}</p>
                <p className="text-[10px]">{t.u}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-grow overflow-x-auto">
          {deals.map((item, idx) => (
            <div key={idx} className="flex-1 min-w-[150px] p-4 border-r last:border-r-0 flex flex-col items-center text-center group cursor-pointer">
              <img src={item.img} alt={item.name} className="h-28 object-contain mb-3 group-hover:scale-105 transition-transform" />
              <p className="text-sm mb-2">{item.name}</p>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">{item.discount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;