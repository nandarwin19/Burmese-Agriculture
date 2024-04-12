import Hero from "../home/Hero";
import BlogSession from "../home/blog/BlogSession";
import CustomerReview from "../home/review/CustomerReview";
import TopSelling from "../home/top-selling/TopSelling";
import TrendyPlant from "../home/trendy-plant/TrendyPlant";

function Home() {
  return (
    <div className="bg-[#02210a] text-slate-200">
      <Hero />
      <TrendyPlant />
      <TopSelling />
      <CustomerReview />
      <BlogSession />
    </div>
  );
}

export default Home;
