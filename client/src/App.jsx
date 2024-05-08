import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Blogs from "./components/blog-page/Blogs";
import Id from "./components/Blog-Id-page/Id";
import SignInUp from "./pages/SignInUp";
import Home from "./pages/Home";
import CreateBlog from "./components/create-blog/CreateBlog";

import OnlyAdminPrivateRoute from "./components/common/OnlyAdminPrivateRoute";

function App() {
  return (
    <Router>
      <div className="bg-[#02210a] text-slate-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignInUp />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-blog" element={<CreateBlog />} />
          </Route>
          <Route path="/blogs/:id" element={<Id />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
