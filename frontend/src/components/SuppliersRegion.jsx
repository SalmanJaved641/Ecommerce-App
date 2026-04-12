const SuppliersRegion = () => {
  const regions = [
    { name: "Arabic Emirates", url: "shopname.ae", flag: "🇦🇪" },
    { name: "Australia", url: "shopname.au", flag: "🇦🇺" },
    { name: "United States", url: "shopname.us", flag: "🇺🇸" },
    { name: "Russia", url: "shopname.ru", flag: "🇷🇺" },
    { name: "Italy", url: "shopname.it", flag: "🇮🇹" },
    { name: "Denmark", url: "shopname.dk", flag: "🇩🇰" },
    { name: "France", url: "shopname.fr", flag: "🇫🇷" },
    { name: "China", url: "shopname.cn", flag: "🇨🇳" },
    { name: "Great Britain", url: "shopname.gb", flag: "🇬🇧" },
  ];

  return (
    <section className="px-4 md:px-10 my-10">
      <h2 className="text-2xl font-bold mb-6">Suppliers by region</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-10">
        {regions.map((region, idx) => (
          <div key={idx} className="flex items-center gap-3 cursor-pointer group">
            <span className="text-2xl">{region.flag}</span>
            <div>
              <p className="text-sm font-medium group-hover:text-blue-600">{region.name}</p>
              <p className="text-xs text-gray-400">{region.url}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuppliersRegion;