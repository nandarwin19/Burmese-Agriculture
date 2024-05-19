import { PiPottedPlantDuotone } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import { TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const search = urlParams.get("searchTerm");
    if (search) {
      setSearchTerm(search);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search`);
  };

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
        <div className="flex items-center gap-8 ">
          <IoMdSearch
            onClick={handleSubmit}
            className="cursor-pointer w-5 h-5"
          />
          <FiShoppingBag className="cursor-pointer w-5 h-5" />
          {currentUser?.isAdmin && (
            <Link to={"/profile"}>
              <CiUser className="cursor-pointer w-5 h-5" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
