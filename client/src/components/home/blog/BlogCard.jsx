import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Proptyes from "prop-types";

export default function BlogCard({ image, title, description }) {
  return (
    <div
      className={`flex relative flex-col-reverse p-6 px-12 w-[90%] mx-auto md:flex-row bg-blur justify-between bg-[#a5a5a507] mt-20 gap-3 border-2 border-[#80808098] rounded-[3.2rem]`}
    >
      <div className=" md:w-1/3 h-full">
        <img
          src={image}
          className="w-96  hidden md:flex bottom-2 left-[-50px]  absolute h-auto"
          alt="trendy plant"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        <h1 className="text-lg tracking-wide md:text-xl font-bold capitalize">
          {title}
        </h1>
        <p className="text-sm text-[#e6e6e6cb] line-clamp-6">{description}</p>

        <div className="flex items-center justify-between gap-1">
          <button className="h-8 rounded-lg tracking-wider px-3 md:px-3 flex items-center justify-center border border-gray-500">
            Explore
          </button>
          <div className="flex items-center gap-2 justify-center cursor-pointer">
            <MdArrowBackIos className="icon" />
            <p className="text-sm page-number font-bold">
              <sup>01</sup>/<sub>04</sub>
            </p>
            <MdArrowForwardIos className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  image: Proptyes.string.isRequired,
  title: Proptyes.string.isRequired,
  description: Proptyes.string.isRequired,
  //   pagenumber: Proptyes.number.isRequired,
};
