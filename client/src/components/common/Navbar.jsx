import { PiPottedPlantDuotone } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineCreate } from "react-icons/md";
import { useSelector } from "react-redux";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex items-center w-full h-[10vh]">
      <nav className="flex max-container items-center justify-between">
        <div className="flex gap-2 items-center text-xl font-bold">
          <PiPottedPlantDuotone className="text-3xl" />
          <p>Planto</p>
        </div>
        <div className="hidden text-slate-400 md:flex text-md font-bold">
          <ul className="items-center gap-8 flex">
            <Link to={`/`}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <li className="cursor-pointer">Plants</li>
            <Link to={`/blogs`}>
              <li className="cursor-pointer">Blogs</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-xl  font-bold">
          <IoMdSearch className="cursor-pointer" />
          <FiShoppingBag className="cursor-pointer" />
          {currentUser?.isAdmin && (
            <Link to={"/profile"}>
              <CiUser className="cursor-pointer" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
