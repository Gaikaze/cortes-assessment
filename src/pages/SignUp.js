import React, { useEffect, useState } from "react";
import { auth, firestore } from "../shared/configs/firebase";
import {
  query,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [users, setUsers] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, stLoading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const ask = query(collection(firestore, "Users"));
    const unsub = onSnapshot(ask, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
      setVisible(true);
    });
    return () => unsub;
  }, []);
  //CreateUser
  const addUser = (e) => {
    e.preventDefault();
    let data = {
      count: users.length + 1,
      firstname,
      lastname,
      email,
      contactnum,
      password,
    };
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await setDoc(doc(firestore, "Users", user.uid), data);
        console.log("Sign up successs!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  //Update User
  const updateUser = async (id) => {
    let userDoc = doc(firestore, "Users", id);
    let newFields = { firstname, lastname, contactnum };

    await updateDoc(userDoc, newFields).then(() => {
      alert("User updated successfully.");
    });
  };

  //Delete User
  const deleteUser = async (id) => {
    let userDoc = doc(firestore, "User", id);
    await deleteDoc(userDoc).then(() => {
      alert("User deleted succesfully.");
    });
  };

  return (
    <div className="signup">
      <h1>SIGN UP!</h1>
      <form onSubmit={addUser}>
        <input
          value={firstname}
          type="text"
          required
          placeholder="First Name"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <input
          value={lastname}
          type="text"
          required
          placeholder=" Last Name"
          onChange={(e) => setLastname(e.target.value)}
        />
        <br />
        <input
          value={email}
          type="text"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          value={contactnum}
          type="text"
          required
          placeholder="Contact Number"
          onChange={(e) => setContactnum(e.target.value)}
        />
        <br />
        <input
          value={password}
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
