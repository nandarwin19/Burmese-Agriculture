import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { MdOutlineCreate, MdOutlinePostAdd } from "react-icons/md";
import Users from "../components/common/Users";
import CreateBlog from "../components/create-blog/CreateBlog";

import Posts from "../components/common/Posts";
import Comments from "../components/common/Comments";

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

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-52 mx-2 min-h-screen">
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
      </div>
      <div className="min-h-screen w-[1.2px] bg-[#0c2f0e] mx-2"></div>
      <div className="flex-1">{renderContent()}</div>
    </div>
  );
};

export default Profile;
