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
    </div>
  );
}

export default App;
