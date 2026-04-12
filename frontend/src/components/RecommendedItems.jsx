const RecommendedItems = () => {
  const products = [
    { name: "T-shirts with multiple colors, for men", price: "10.30", img: "/assets/item1.png" },
    { name: "Jeans shorts for men blue color", price: "10.30", img: "/assets/item2.png" },
    { name: "Brown winter coat medium size", price: "12.50", img: "/assets/item3.png" },
    { name: "Leather wallet for men Blue", price: "34.00", img: "/assets/item4.png" },
    { name: "Jeans bag for travel for women", price: "99.00", img: "/assets/item5.png" },
    { name: "Jeans Kacha", price: "9.99", img: "/assets/item6.png" },
    { name: "Headset for gaming with mic", price: "8.99", img: "/assets/item7.png" },
    { name: "Jeans bag for travel for women", price: "10.30", img: "/assets/item5.png" },
    { name: "Good Luck POT", price: "10.30", img: "/assets/pot.png" },
    { name: "Good Luck Kattle", price: "80.95", img: "/assets/item8.png" },
  ];

  return (
    <section className="px-4 md:px-10 my-10">
      <h2 className="text-2xl font-bold mb-6">Recommended items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white border p-4 rounded-md hover:shadow-md transition cursor-pointer">
            <div className="h-40 flex items-center justify-center mb-4">
              <img src={product.img} alt={product.name} className="max-h-full object-contain" />
            </div>
            <p className="font-bold text-gray-900">${product.price}</p>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedItems;