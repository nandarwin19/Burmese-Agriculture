import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProfilePosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [postIdToDelete, setPostIdToDelete] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const handleDeletePost = async () => {
    setShowModal(false);
    document.getElementById("my_modal_5").close();
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
        toast.success("Post deleted");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Toaster />
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
                      <Link to={`/blogs/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-10 object-cover bg-gray-500"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                    </td>
                    <td>{post.category}</td>
                    <td>
                      <span
                        onClick={() => {
                          document.getElementById("my_modal_5").showModal();
                          setPostIdToDelete(post._id);
                        }}
                        className="font-medium text-red-500 hover:underline cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>

                    <td>
                      <Link
                        className="text-teal-500 hover:underline"
                        to={`/update-blog/${post._id}`}
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

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Are you sure you want to delete?</p>

          <div className="modal-action">
            <div className="flex gap-4">
              <button type="submit" className="btn" onClick={handleDeletePost}>
                Yes
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
