import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CiCalendarDate, CiUser } from "react-icons/ci";
import { MdOutlineTopic } from "react-icons/md";

export default function PostCard({ post }) {
  return (
    <div
      className={`group flex relative p-3 md:p-5 w-full md:flex-row bg-blur justify-between bg-[#a5a5a507] md:w-[48%] gap-3 border-2 border-[#80808098] rounded-[3.2rem]`}
    >
      <div className="w-1/2 md:w-1/3 h-full">
        <Link to={`/blogs/${post.slug}`}>
          <img
            src={post?.image}
            className="w-[200px] h-[200px] group-hover:scale-105 group-hover:transition duration-1000 ease-in-out  rounded-xl"
            alt="trendy plant"
          />
        </Link>
      </div>
      <div className="w-1/2 md:w-2/3 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <CiUser className="text-[#2fb723]" />
          <p className="text-sm">By admin</p>
        </div>
        <div className="flex gap-2 items-center">
          <CiCalendarDate className="text-[#2fb723]" />
          <p className="text-sm">
            {post && new Date(post?.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineTopic className="text-[#2b8224]" />
          <span className="text-sm">{post?.category}</span>
        </div>

        <h1 className="text-lg tracking-wide md:text-xl font-bold">
          {post?.title}
        </h1>

        <div
          className="max-w-2xl mx-auto w-full post-content line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post && post?.content }}
        ></div>

        <Link to={`/blogs/${post.slug}`}>
          <button className="h-8 group-hover:bg-[#2fb723] group-hover:text-white w-36 text-[#2fb723] font-bold duration-300 transition-all ease-in-out rounded-lg tracking-wider px-3  flex items-center justify-center border border-gray-500">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string,
    createdAt: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
