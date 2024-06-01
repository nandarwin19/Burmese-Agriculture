import { PiPottedPlantDuotone } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import { GoSignIn } from "react-icons/go";

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
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
  let headerTextColor = "text-white";
  let headerColor = "transparent";
  let ulTextColor = "text-slate-400";
  if (location.pathname === "/plant") {
    headerColor = "bg-slate-300";
    headerTextColor = "text-slate-700";
    ulTextColor = "text-slate-500";
  }

  return (
    <div className={`${headerColor} z-50 flex items-center w-full h-[10vh]`}>
      <nav className="flex max-container items-center justify-between">
        <Link to={`/`}>
          <div
            className={`${headerTextColor} flex gap-2 items-center text-xl font-bold`}
          >
            <PiPottedPlantDuotone className="text-3xl" />
            <p>Planto</p>
          </div>
        </Link>
        <div className={`${ulTextColor} md:flex text-sm lg:text-md font-bold`}>
          <ul className="items-center gap-8 flex">
            <Link to={`/`} className="hidden md:flex">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link to={"/plant"}>
              <li className="cursor-pointer">Plant</li>
            </Link>
            <Link to={`/blogs`}>
              <li className="cursor-pointer">Blogs</li>
            </Link>
          </ul>
        </div>
        <div className={`flex items-center gap-8 ${headerTextColor}`}>
          <IoMdSearch
            onClick={handleSubmit}
            className="cursor-pointer w-5 h-5"
          />

          {currentUser?.isAdmin && (
            <Link to={"/profile"}>
              <CiUser className="cursor-pointer w-5 h-5" />
            </Link>
          )}
          {!currentUser && (
            <Link to={"/sign"}>
              <GoSignIn />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
