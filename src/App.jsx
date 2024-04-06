import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TrendyPlant from "./components/TrendyPlant";

function App() {
  return (
    <div className="bg-[#02210a] text-slate-200">
      <Navbar />
      <Hero />
      <TrendyPlant />
    </div>
  );
}

export default App;
