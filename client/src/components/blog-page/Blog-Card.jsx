import Proptypes from "prop-types";
import { CiCalendarDate, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function BlogCard({
  image,
  title,
  description,
  username,
  date,
  id,
}) {
  return (
    <div
      className={`group flex relative p-3 md:p-6 w-full md:flex-row bg-blur justify-between bg-[#a5a5a507] md:w-[48%] mt-20 gap-3 border-2 border-[#80808098] rounded-[3.2rem]`}
    >
      <div className="w-1/2 md:w-1/3 h-full">
        <img
          src={image}
          className="w-full h-[100%] group-hover:scale-105 group-hover:transition duration-1000 ease-in-out  rounded-xl"
          alt="trendy plant"
        />
      </div>
      <div className="w-1/2 md:w-2/3 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <CiUser className="text-[#2fb723]" />
          <p className="text-sm">By {username}</p>
        </div>
        <div className="flex gap-2 items-center">
          <CiCalendarDate className="text-[#2fb723]" />
          <p>{date}</p>
        </div>
        <h1 className="text-lg tracking-wide md:text-xl font-bold">{title}</h1>
        <p className="text-sm text-[#e6e6e6cb] line-clamp-2">{description}</p>

        <Link to={`/blogs/id`}>
          <button className="h-8 w-36 text-[#2fb723] font-bold rounded-lg tracking-wider px-3  flex items-center justify-center border border-gray-500">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  username: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
};
