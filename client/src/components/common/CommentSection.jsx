import { Textarea } from "flowbite-react";
import { set } from "mongoose";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (comment.length > 200) {
  //       return;
  //     }
  //     try {
  //       const res = await fetch("/api/comment/create", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           content: comment,
  //           postId,
  //           userId: currentUser._id,
  //         }),
  //       });
  //       const data = await res.json();
  //       if (res.ok) {
  //         setComment("");
  //         setCommentError(null);
  //       }
  //     } catch (error) {
  //       setCommentError(error.message);
  //     }
  //   };
  const handleSubmit = async (e) => {};
  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
          <p>Signed in as:</p>
          <img
            className="h-5 w-5 object-cover rounded-full"
            src={currentUser.image}
            alt=""
          />
          <Link
            to={"/dashboard?tab=profile"}
            className="text-xs text-cyan-600 hover:underline"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5 flex gap-1">
          You must be signed in to comment.
          <Link className="text-blue-500 hover:underline" to={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className="border border-tale-400 rounded-md p-3"
        >
          <Textarea
            placeholder="Add a comment..."
            rows="4"
            maxLength="200"
            className="placeholder:text-black/80 text-black/80"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className="flex justify-between items-center mt-5">
            <p className="text-gray-500 text-xs">
              {200 - comment.length} characters remaining
            </p>
            <button className="btn btn-neutral" type="submit">
              Submit
            </button>
          </div>
          {commentError && (
            <div role="alert" className="alert alert-error">
              {commentError}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
