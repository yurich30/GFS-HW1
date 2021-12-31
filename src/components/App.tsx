import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoList from './VideoList/VideoList';
import Navbar from './NavBar/Navbar';
import UserVideos from './UserVideos/UserVideos';
import NotFound from './NotFound/NotFound';
import Profile from './Profile/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<UserVideos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
