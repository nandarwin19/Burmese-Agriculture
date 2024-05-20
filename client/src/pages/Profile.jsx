import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { MdExitToApp, MdOutlineCreate, MdOutlinePostAdd } from "react-icons/md";
import Comments from "../components/common/Comments";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import ProfileUsers from "../components/common/ProfileUsers";
import ProfilePosts from "../components/common/ProfilePosts";
import CreateBlog from "../components/common/CreateBlog";

const sidebarLinks = [
  { name: "users", icon: CiUser, path: "/profile?tab=users" },
  { name: "posts", icon: MdOutlinePostAdd, path: "/profile?tab=posts" },
  { name: "comments", icon: LiaComments, path: "/profile?tab=comments" },
  {
    name: "create-blog",
    icon: MdOutlineCreate,
    path: "/profile?tab=create-blog",
  },
];

const Profile = () => {
  const [tab, setTab] = useState("users");
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromQuery = params.get("tab");
    if (tabFromQuery) {
      setTab(tabFromQuery);
    }
  }, [location.search]);

  const renderContent = () => {
    switch (tab) {
      case "users":
        return <ProfileUsers />;
      case "posts":
        return <ProfilePosts />;
      case "comments":
        return <Comments />;
      case "create-blog":
        return <CreateBlog />;
      default:
        return null;
    }
  };

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/auth/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full  min-h-screen flex flex-col md:flex-row">
      <Toaster />
      <div className="w-screen gap-4 flex-wrap h-auto lg:min-h-screen flex md:block lg:w-52 mx-2 relative">
        <>
          {sidebarLinks.map(({ name, icon: Icon, path }) => (
            <Link
              key={name}
              to={path}
              className={`flex cursor-pointer gap-2 items-center px-4 my-4 py-3 hover:bg-[#113210] rounded-md transition-all duration-300 ease-in-out ${
                tab === name ? "bg-[#113210]" : ""
              }`}
            >
              <Icon className={`w-10 h-6`} />
              <span>{name}</span>
            </Link>
          ))}
          <div
            onClick={handleSignout}
            className={`lg:absolute bottom-3 p-4 lg:w-full flex cursor-pointer gap-2 items-center my-4 py-3 hover:bg-[#113210] rounded-md transition-all duration-300 ease-in-out`}
          >
            <MdExitToApp className={`w-10 h-6`} />
            <span>Sign Out</span>
          </div>
        </>
      </div>
      <div className="lg:min-h-screen w-[1.2px] bg-[#0c2f0e] mx-2"></div>
      <div className="flex-1">{renderContent()}</div>
    </div>
  );
};

export default Profile;
