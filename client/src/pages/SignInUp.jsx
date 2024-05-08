import { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SignInUp() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleRequest = async (url) => {
    try {
      dispatch(signInStart());

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }

    handleRequest("/api/auth/signup");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }

    handleRequest("/api/auth/signin");
  };

  return (
    <div className="h-[90vh] w-full flex items-center justify-center bg-slate-200  font-poppins">
      <div className="w-11/12 mx-auto pt-10">
        <div className="w-full max-w-sm mx-auto bg-slate-200 backdrop-blur-md rounded-lg p-8 py-16 border-2 border-gray-300/60 shadow-md ">
          <h1 className="text-2xl mb-5 text-center text-black font-bold">
            {toggle ? "Sign Up" : "Sign In"}
          </h1>
          <form
            onSubmit={toggle ? handleSubmit : handleSignIn}
            className="flex flex-col gap-4"
          >
            {toggle && (
              <input
                type="text"
                placeholder="username"
                className="border text-black/90 p-3 rounded-lg"
                id="username"
                onChange={handleChange}
              />
            )}
            <input
              type="email"
              placeholder="email"
              className="border text-black/90 p-3 rounded-lg"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="border text-black/90 p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />

            <button
              disabled={loading}
              className="w-full cursor-pointer flex items-center justify-center gap-2 mt-3 py-2 relative text-white bg-black/90 font-medium rounded-lg"
            >
              {toggle ? "Sign Up" : "Sign In"}
              {loading ? (
                <div className="w-4 h-4">
                  <div className="animate-spin">
                    <FaCircleNotch />
                  </div>
                </div>
              ) : null}
            </button>
          </form>
          <div className="flex gap-2 text-black/70 text-sm mt-5">
            <p>
              {toggle ? `Don't have an account?` : `Already have an account`}
            </p>

            <span
              className="text-blue-700 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? "Sign In" : "Sign Up"}
            </span>
          </div>
          {errorMessage && <p className="text-red-500 mt-5">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}
