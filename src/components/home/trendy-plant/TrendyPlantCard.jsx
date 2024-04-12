import { FiShoppingBag } from "react-icons/fi";
import Proptypes from "prop-types";
export default function TrendyPlantCard({ image, title, description, price }) {
  return (
    <div
      className={`flex relative p-3 md:p-6 w-full md:flex-row bg-blur justify-between bg-[#a5a5a507] md:w-1/2 mt-20 gap-3 border-2 border-[#80808098] rounded-[3.2rem]`}
    >
      <div className="w-1/2 md:w-1/3 h-full">
        <img
          src={image}
          className="w-72  bottom-2 left-[-50px]  absolute h-auto"
          alt="trendy plant"
        />
      </div>
      <div className="w-1/2 md:w-2/3 flex flex-col gap-2">
        <h1 className="text-lg tracking-wide md:text-xl font-bold">{title}</h1>
        <p className="text-sm text-[#e6e6e6cb] line-clamp-2">{description}</p>
        <h3 className="text-lg">Rs. {price}/-</h3>
        <div className="flex items-center gap-1">
          <button className="h-8 rounded-lg tracking-wider px-3 md:px-3 flex items-center justify-center border border-gray-500">
            Explore
          </button>
          <button className="cursor-pointer h-8 rounded-md tracking-wider px-2 flex items-center justify-center border border-gray-500">
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
}

TrendyPlantCard.propTypes = {
  image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
};
