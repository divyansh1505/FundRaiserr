import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../components/firebase"; // Adjust the path to your firebase config
import { toast } from "react-toastify";
import SignInWithGoogle from "../components/SignInWithGoogle.jsx";
import '../styles/Auth.css'; 

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully", { position: "top-center" });
      window.location.href = "/profile";
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h3>Login</h3>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <SignInWithGoogle />
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </form>
  );
}

export default SignInPage;
