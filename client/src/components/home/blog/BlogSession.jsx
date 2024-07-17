import BlogCard from "./BlogCard";
import Title from "../../common/Title";

export default function BlogSession() {
  return (
    <div id="blog" className="w-full h-full">
      <div className="max-container py-20">
        <Title text="Our Blog" />
        <div className="mt-10">
          <BlogCard
            image="/img/p3.png"
            title="We have Small and best 02 Plants collections"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis nisi quisquam facere earum. Iste, officiis vitae consequuntur ratione expedita soluta quae laborum neque beatae ut maiores nostrum, fugiat ullam ipsam laboriosam alias placeat. Consectetur libero neque dolor commodi eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis nisi quisquam facere earum. Iste, officiis vitae consequuntur ratione expedita soluta quae laborum neque beatae ut maiores nostrum, fugiat ullam ipsam laboriosam alias placeat. Consectetur libero neque dolor commodi eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis nisi quisquam facere earum. Iste, officiis vitae consequuntur ratione expedita soluta quae laborum neque beatae ut maiores nostrum, fugiat ullam ipsam laboriosam alias placeat. Consectetur libero neque dolor commodi eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis nisi quisquam facere earum. Iste, officiis vitae consequuntur ratione expedita soluta quae laborum neque beatae ut maiores nostrum, fugiat ullam ipsam laboriosam alias placeat. Consectetur libero neque dolor commodi eligendi."
          />
        </div>
      </div>
    </div>
  );
}
