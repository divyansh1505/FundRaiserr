import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AboutUs from './pages/AboutUs';
import Payment from './pages/Payment';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Profile from './components/Profile';
import { ToastContainer, toast } from "react-toastify";
import { auth } from './components/firebase';  // Adjust path if necessary

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // Monitor Firebase authentication status
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/signin" element={user ? <Navigate to="/profile" /> : <SignInPage />} />
            <Route path="/signup" element={user ? <Navigate to="/profile" /> : <SignUpPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/donate" element={<Payment />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/signin" />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

