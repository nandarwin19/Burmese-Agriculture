import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function ProfileUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [userIdToDelete, setUserIdToDelete] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          if (data.users.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
        toast.error("Something went wrong");
      }
    };
    fetchUsers();
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);
        if (data.users.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/user/delete/${userIdToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      if (res.ok) {
        setUsers((prev) => prev.filter((user) => user._id !== userIdToDelete));
        document.getElementById("my_modal_5").close();
        toast.success("User deleted");
      } else {
        console.log(data.message);
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Toaster />
      {currentUser.isAdmin && users.length > 0 ? (
        <>
          <div className=" overflow-x-scroll overflow-y-scroll md:overflow-hidden p-3">
            <table className="table">
              <thead>
                <tr>
                  <th>User Created</th>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
              </thead>

              {users.map((user) => (
                <tbody key={user._id}>
                  <tr>
                    <td>{new Date(user.updatedAt).toLocaleDateString()}</td>
                    <td>
                      <Link to={`/user/${user.slug}`}>
                        <img
                          src={user.image}
                          alt={user.title}
                          className="w-10 rounded-full h-10 object-cover bg-gray-500"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/user/${user.slug}`}>{user.username}</Link>
                    </td>
                    <td>{user.email}</td>

                    <td>
                      {user.isAdmin ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaTimes className="text-red-500" />
                      )}
                    </td>
                    <td>
                      <span
                        onClick={() => {
                          document.getElementById("my_modal_5").showModal();
                          setUserIdToDelete(user._id);
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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Are you sure you want to delete?</p>

          <div className="modal-action">
            <div className="flex gap-4">
              <button type="submit" className="btn" onClick={handleDeleteUser}>
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
