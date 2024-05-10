import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Posts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
          <div className=" overflow-x-scroll overflow-y-scroll md:overflow-hidden p-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Date updated</th>
                  <th>Post image</th>
                  <th>Post title</th>
                  <th>Category</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>

              {userPosts.map((post) => (
                <tbody key={post._id}>
                  <tr>
                    <td>{new Date(post.updatedAt).toLocaleDateString()}</td>
                    <td>
                      <Link to={`/post/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-10 object-cover bg-gray-500"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/post/${post.slug}`}>{post.title}</Link>
                    </td>
                    <td>{post.category}</td>
                    <td>
                      <span className="font-medium text-red-500 hover:underline cursor-pointer">
                        Delete
                      </span>
                    </td>
                    <td>
                      <Link
                        className="text-teal-500 hover:underline"
                        to={`/update-post/${post._id}`}
                      >
                        <span>Edit</span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </>
      ) : (
        <p>There is no posts</p>
      )}
      {showMore && (
        <button
          onClick={handleShowMore}
          className="w-full text-teal-500 self-center text-sm py-7"
        >
          Show more
        </button>
      )}
    </div>
  );
}
