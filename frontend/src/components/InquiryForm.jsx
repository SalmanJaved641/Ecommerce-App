const InquiryForm = () => {
  return (
    <section className="px-4 md:px-10 my-10">
      {/* Background Container with Overlay */}
      <div 
        className="relative rounded-md overflow-hidden bg-cover bg-center min-h-[400px] flex items-center px-6 md:px-10"
        style={{ backgroundImage: "url('/assets/inquiry-bg.png')" }} // Use your background image
      >
        

        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Text Content */}
          <div className="text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-4">An easy way to send requests to all suppliers</h2>
            <p className="hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* The Form Card */}
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Send quote to suppliers</h3>
            <form className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="What item you need?" 
                className="border p-2 rounded-md outline-none focus:border-blue-500"
              />
              <textarea 
                placeholder="Type more details" 
                rows="3" 
                className="border p-2 rounded-md outline-none focus:border-blue-500"
              ></textarea>
              <div className="flex gap-4">
                <input 
                  type="number" 
                  placeholder="Quantity" 
                  className="border p-2 rounded-md w-full outline-none focus:border-blue-500"
                />
                <select className="border p-2 rounded-md w-full outline-none focus:border-blue-500">
                  <option>Pcs</option>
                  <option>Kg</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;