const CategoryGrid = ({ title, bannerImg, items, bannerBg }) => {
  return (
    <section className="px-4 md:px-10 my-5">
      <div className="bg-white border rounded-md flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar Banner */}
        <div className={`w-full lg:w-1/4 p-6 flex flex-col justify-between items-start min-h-[250px] ${bannerBg} bg-cover bg-center`} style={{ backgroundImage: `url(${bannerImg})` }}>
          <h3 className="text-xl font-bold max-w-[150px]">{title}</h3>
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium shadow-sm hover:bg-gray-100 transition">
            Source now
          </button>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-2 md:grid-cols-4 flex-grow">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-r p-4 flex flex-col justify-between hover:bg-gray-50 cursor-pointer">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-400">From <br/> USD {item.price}</p>
              </div>
              <img src={item.img} alt={item.name} className="h-20 object-contain self-end mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;