import Hero from "../components/home/Hero";
import PlantModel from "../components/home/PlantModel";
import BlogSession from "../components/home/blog/BlogSession";
import CustomerReview from "../components/home/review/CustomerReview";
import TopSelling from "../components/home/top-selling/TopSelling";
import TrendyPlant from "../components/home/trendy-plant/TrendyPlant";

function Home() {
  return (
    <div className="bg-[#02210a] text-slate-200">
      <Hero />
      <TrendyPlant />
      <PlantModel />
      <TopSelling />
      <TrendyPlant />
      <CustomerReview />
      <BlogSession />
    </div>
  );
}

export default Home;
