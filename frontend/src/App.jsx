import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <Hero />
      {/* We will add more sections here later! */}
      <h1 className="text-3xl font-bold text-blue-600 underline">
      Tailwind is working!
    </h1>
    </div>
    
  );
}

export default App;
