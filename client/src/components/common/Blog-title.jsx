import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";

export default function BlogTitle({ onShowMore }) {
  return (
    <div className="flex items-center justify-between pt-20">
      <div>
        <div className="flex gap-2 items-center">
          <PiPlantFill className="text-[#2fb723]" />
          <h3 className="text-[#ba7f1f]">Blog & News</h3>
        </div>
        <h1 className="text-[3rem]">Latest Updates & News</h1>
      </div>
      <button
        onClick={onShowMore}
        className="bg-[#2fb723] flex gap-1 items-center py-2 rounded-xl px-3"
      >
        View More Posts <MdKeyboardDoubleArrowRight className="text-xl" />
      </button>
    </div>
  );
}
