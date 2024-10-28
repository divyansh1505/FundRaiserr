import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function SignInWithGoogle() {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: user.displayName,
        photo: user.photoURL,
      });
      toast.success("Logged in with Google", { position: "top-center" });
      window.location.href = "/profile";
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div onClick={googleLogin} style={{ cursor: "pointer" }}>
      <img src={require("../google.png")} alt="Sign in with Google" width="40%" />
    </div>
  );
}

export default SignInWithGoogle;
