import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStandards from './components/AboutStandards';
import HouseBrands from './components/HouseBrands';
import ProductCategories from './components/ProductCategories';
import ContractManufacturing from './components/ContractManufacturing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-zinc-50 overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <AboutStandards />
        <HouseBrands />
        <ProductCategories />
        <ContractManufacturing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
