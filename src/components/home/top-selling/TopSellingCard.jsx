import { FiShoppingBag } from "react-icons/fi";
import Proptypes from "prop-types";

export default function TopSellingCard({ img, description, title, price }) {
  return (
    <div className="w-[320px] mx-auto text-gray-400 relative p-7 md:flex-row bg-blur justify-between bg-[#a5a5a507] mt-20 gap-3 border-2 border-[#80808098] rounded-[3rem]">
      <img
        src={img}
        alt="plant"
        className="w-60 absolute top-[-60px] left-1/2 right-1/2 -translate-x-1/2 h-auto object-center"
      />
      <div className="flex flex-col justify-between pt-40 gap-2">
        <h3 className="text-xl font-semibold text-gray-300">{title}</h3>
        <p className="text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <h3>Rs. {price}/-</h3>
          <button className="cursor-pointer h-8 rounded-md tracking-wider px-2 flex items-center justify-center border border-gray-500">
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
}

TopSellingCard.propTypes = {
  img: Proptypes.string,
  description: Proptypes.string,
  title: Proptypes.string,
  price: Proptypes.string,
};
