import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Article from "./pages/Atricle/Article";
import AdminHome from "./pages/admin/adminHome/AdminHome";
import AdminContact from "./pages/admin/AdminContact/AdminContact";
import AdminAbout from "./pages/admin/AdminAbout/AdminAbout";
import AdminArticle from "./pages/admin/AdminAtricle/AdminArticle";
import AdminArticleDetails from "./pages/admin/AdminArticleDetails/AdminArticleDetails";

function App() {
  return (
    <div className="App font-Ubuntu">
      {/* start routes  */}
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<ArticleDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/admin" element={<Profile />}></Route>
        <Route path="/article" element={<Article />}></Route>
        <Route path="/adminHome" element={<AdminHome />}></Route>
        <Route path="/adminAbout" element={<AdminAbout />}></Route>
        <Route path="/adminContact" element={<AdminContact />}></Route>
        <Route path="/adminArticle" element={<AdminArticle />}></Route>
        <Route path="/adminArticleDetails/:id" element={<AdminArticleDetails />}></Route>
      </Routes>
      {/* end routes  */}
    </div>
  );
}

export default App;
