import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import BlogTitle from "../components/common/Blog-title";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    try {
      const fetchReactPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=4`);
        const data = await res.json();
        if (res.ok) {
          setBlogPosts(data.posts);
        }
      };
      fetchReactPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleShowMore = async () => {
    const startIndex = blogPosts.length;
    try {
      const res = await fetch(`/api/post/getposts?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setBlogPosts((prev) => [...prev, ...data.posts]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="max-container">
        <BlogTitle onShowMore={handleShowMore} />

        {blogPosts ? (
          <div className="flex flex-wrap gap-8 my-12 items-start justify-between">
            {blogPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
}
