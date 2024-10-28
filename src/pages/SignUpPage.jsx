import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import '../styles/Auth.css'; 

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
      });
      toast.success("User registered successfully!", { position: "top-center" });
      window.location.href = "/profile";
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <form onSubmit={handleRegister} className="auth-form">
      <h3>Sign Up</h3>
      <input type="text" placeholder="First name" onChange={(e) => setFname(e.target.value)} />
      <input type="text" placeholder="Last name" onChange={(e) => setLname(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </form>
  );
}

export default SignUpPage;
