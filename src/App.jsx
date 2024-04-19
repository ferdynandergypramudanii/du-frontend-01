import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import FetchUser from "./components/FetchUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/users" element={<FetchUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
