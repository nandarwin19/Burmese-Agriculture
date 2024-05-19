import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import SignInUp from "./pages/SignInUp";
import Home from "./pages/Home";
import CreateBlog from "./components/create-blog/CreateBlog";
import OnlyAdminPrivateRoute from "./components/common/OnlyAdminPrivateRoute";
import Profile from "./pages/Profile";
import UpdateBlog from "./pages/UpdateBlog";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/common/ScrollToTop";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <div className="bg-[#02210a] text-slate-200">
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Public Route  */}
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignInUp />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:blogSlug" element={<PostPage />} />

          {/* Private Route  */}
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update-blog/:postId" element={<UpdateBlog />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
