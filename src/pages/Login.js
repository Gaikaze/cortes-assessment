import React, { useState } from "react";
import { auth } from "../shared/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import banner from "../assets/banner.jpg";
import { useAuthContext } from "../shared/context/AuthContext";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { user } = useAuthContext();

  function login(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Login Success");
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="login">
      {user ? (
        <div>
          <h1>Welcome Admin!!!!</h1>
        </div>
      ) : (
        <>
          {/* <img src={banner} alt="" /> */}
          <form onSubmit={login}>
            <input
              value={email}
              type="text"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={password}
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
