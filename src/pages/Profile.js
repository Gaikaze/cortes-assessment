import React, { useEffect, useState } from "react";
import { firestore } from "../shared/configs/firebase";
import {
  query,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

function Profile() {
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
    console.log(id);
    let userDoc = doc(firestore, "Users", id);
    await deleteDoc(userDoc).then(() => {
      alert("User deleted succesfully.");
    });
  };

  return (
    <div className="profile">
      <h1>PROFILE</h1>
      {visible
        ? users.map((item, i) => {
            return (
              <div key={item.id}>
                <p>
                  First Name: {item.firstname}
                  <br />
                  Last Name: {item.lastname}
                  <br />
                  Email: {item.email}
                  <br />
                  Number: {item.contactnum}
                  <br />
                </p>
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
                <button
                  type="button"
                  onClick={() => {
                    updateUser(item.id);
                  }}
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => {
                    deleteUser(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}

export default Profile;
