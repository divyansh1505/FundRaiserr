import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AboutUs from './pages/AboutUs';
import Payment from './pages/Payment';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content"> {/* Add this wrapper */}
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donate" element={<Payment />} />
        </Routes>
      </main>
    </div>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Footer />
//       <AboutUs />
//       <Payment />
    
//     </div>
//   );
// }


