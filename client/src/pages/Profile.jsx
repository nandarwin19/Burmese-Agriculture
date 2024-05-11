import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { MdExitToApp, MdOutlineCreate, MdOutlinePostAdd } from "react-icons/md";
import Users from "../components/common/Users";
import CreateBlog from "../components/create-blog/CreateBlog";

import Posts from "../components/common/Posts";
import Comments from "../components/common/Comments";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelect } from "@react-three/drei";
import { signoutSuccess } from "../redux/user/userSlice";

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
        return <Users />;
      case "posts":
        return <Posts />;
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
    <div className="w-full min-h-screen flex">
      <Toaster />
      <div className="w-52 mx-2 h-[90vh] relative">
        <>
          {sidebarLinks.map(({ name, icon: Icon, path }) => (
            <Link
              key={name}
              to={path}
              className={`flex cursor-pointer gap-2 items-center my-4 py-3 hover:bg-[#113210] rounded-md transition-all duration-300 ease-in-out ${
                tab === name ? "bg-[#113210]" : ""
              }`}
            >
              <Icon className={`w-10 h-6`} />
              <span>{name}</span>
            </Link>
          ))}
          <div
            onClick={handleSignout}
            className={`absolute bottom-3 w-full flex cursor-pointer gap-2 items-center my-4 py-3 hover:bg-[#113210] rounded-md transition-all duration-300 ease-in-out`}
          >
            <MdExitToApp className={`w-10 h-6`} />
            <span>Sign Out</span>
          </div>
        </>
      </div>
      <div className="min-h-screen w-[1.2px] bg-[#0c2f0e] mx-2"></div>
      <div className="flex-1">{renderContent()}</div>
    </div>
  );
};

export default Profile;
