import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Comments() {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getcomments`);
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          if (data.comments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchComments();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getcomments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteComment = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/comment/deleteComment/${commentIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) =>
          prev.filter((comment) => comment._id !== commentIdToDelete)
        );
        setShowModal(false);
        document.getElementById("my_modal_5").close();
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="">
      {currentUser.isAdmin && comments.length > 0 ? (
        <>
          <div className=" overflow-x-scroll overflow-y-scroll md:overflow-hidden p-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Date updated</th>
                  <th>Comment content</th>
                  <th>postId</th>
                  <th>UserId</th>
                  <th>Delete</th>
                </tr>
              </thead>

              {comments.map((comment) => (
                <tbody key={comment._id}>
                  <tr>
                    <td>{new Date(comment.updatedAt).toLocaleDateString()}</td>
                    <td>{comment.content}</td>
                    <td>{comment.postId}</td>
                    <td>{comment.userId}</td>
                    <td>
                      <span
                        onClick={() => {
                          document.getElementById("my_modal_5").showModal();
                          setCommentIdToDelete(comment._id);
                        }}
                        className="font-medium text-red-500 hover:underline cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
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
          <p className="py-4">Are you sure you want to delete?</p>

          <div className="modal-action">
            <div className="flex gap-4">
              <button
                type="submit"
                className="btn"
                onClick={handleDeleteComment}
              >
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
