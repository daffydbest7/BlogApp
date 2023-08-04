import React from 'react';
import { Toaster } from 'react-hot-toast';
import {Routes, Route } from "react-router-dom"; 
import './App.css';
import LandingPage from './pages/home/LandingPage';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import ForgotPasswordPage from './pages/forgotpassword/ForgotPasswordPage';
import EntertainmentPage from './pages/entertainment/EntertainmentPage';
import ToolsPage from './pages/tools/ToolsPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import NewPost from "./pages/admin/screens/posts/NewPost";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
       <Route index path="/" element={ <LandingPage/>} />
       <Route path="/blog/:slug" element={ <ArticleDetailPage/>} />
       <Route path="/register" element={ <RegisterPage/>} />
       <Route path="/login" element={ <LoginPage/>} />
       <Route path="/profile" element={ <ProfilePage/>} />
       <Route path="/forgot-password" element={ <ForgotPasswordPage/> } />
       <Route path="/entertainment" element={ <EntertainmentPage/> } />
       <Route path="/tools" element={ <ToolsPage/> } />
       <Route path="/pages/about" element={ <AboutPage/> } />
       <Route path="/pages/contact" element={ <ContactPage/> } />
       <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
