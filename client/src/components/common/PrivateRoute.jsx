import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignInUp from "../../pages/SignInUp";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <SignInUp />;
}
