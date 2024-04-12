import { FaStar } from "react-icons/fa";
import Proptypes from "prop-types";

export default function ReviewCard({ img, name, review }) {
  return (
    <div className="flex flex-col bg-blur bg-[#d7d7d70b] items-start w-[320px] mt-20 gap-3 p-6 border-2 border-[#80808078]  rounded-tl-[2.8rem] rounded-br-[2.8rem]">
      <div className="flex items-center justify-center gap-2">
        <img
          src={img}
          alt="profile"
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="text-sm">
          <p>{name}</p>
          <p className="flex gap-1 text-[#FFF84E]">
            {Array(5)
              .fill()
              .map((_, index) => (
                <FaStar key={index} />
              ))}
          </p>
        </div>
      </div>
      <div>
        <p>{review}</p>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  img: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  review: Proptypes.string.isRequired,
};
