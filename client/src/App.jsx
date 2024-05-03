import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import Blogs from "./components/blog-page/Blogs";
import Id from "./components/Blog-Id-page/Id";

function App() {
  return (
    <Router>
      <div className="bg-[#02210a] text-slate-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Id />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
