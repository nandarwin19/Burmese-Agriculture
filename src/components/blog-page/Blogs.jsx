import BlogCard from "./Blog-Card";
import BlogTitle from "./Blog-title";

export default function Blogs() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-container">
        <BlogTitle />
        <div className="flex flex-wrap items-start justify-between">
          <BlogCard
            id="1"
            image={`/img/p1.png`}
            title="Sansevieria Trifasciata"
            username="Hla Hla"
            date="May 5, 2021"
            description="The Snake Plant is an easy-to-care-for houseplant with stiff, sword-like leaves that grow upright."
          />
          <BlogCard
            image={`/img/p1.png`}
            title="Sansevieria Trifasciata"
            username="Hla Hla"
            date="May 5, 2021"
            description="The Snake Plant is an easy-to-care-for houseplant with stiff, sword-like leaves that grow upright."
          />
          <BlogCard
            image={`/img/p1.png`}
            title="Sansevieria Trifasciata"
            username="Hla Hla"
            date="May 5, 2021"
            description="The Snake Plant is an easy-to-care-for houseplant with stiff, sword-like leaves that grow upright."
          />
          <BlogCard
            image={`/img/p1.png`}
            title="Sansevieria Trifasciata"
            username="Hla Hla"
            date="May 5, 2021"
            description="The Snake Plant is an easy-to-care-for houseplant with stiff, sword-like leaves that grow upright."
          />
        </div>
        <div className="flex items-center justify-center py-8">
          <button className="py-2 px-4 bg-white rounded-xl text-black font-bold">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
