import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../shared/configs/firebase";
import ads from "../assets/LOVE.mp4";

function ViewOrder() {
  const [orders, setOrders] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, stLoading] = useState(false);

  const [address, setAddress] = useState("");
  const [custname, setCustname] = useState("");
  const [date, setDate] = useState("");
  const [itemset, setItemSet] = useState("");
  const [ordercategory, setOrdercategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    const ask = query(collection(firestore, "Orders"));
    const unsub = onSnapshot(ask, (querySnapshot) => {
      setOrders(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
      setVisible(true);
    });
    return () => unsub;
  }, []);
  const updateOrder = async (id) => {
    let userOrder = doc(firestore, "Orders", id);
    let newFields = {
      address,
      custname,
      itemset,
      price,
      quantity,
      total: getTotal(),
    };

    await updateDoc(userOrder, newFields).then(() => {
      alert("Order updated successfully.");
    });
  };

  //Delete order
  const deleteOrder = async (id) => {
    console.log(id);
    let userOrder = doc(firestore, "Orders", id);
    await deleteDoc(userOrder).then(() => {
      alert("User deleted succesfully.");
    });
  };
  function getTotal() {
    return quantity * price;
  }

  return (
    <div className="ads">
      <video
        src={ads}
        width={500}
        height={500}
        autoPlay
        loop={true}
        muted={true}
      ></video>
      <h1>Available on Sale</h1>
      <div className="listorders">
        {visible
          ? orders.map((item, i) => {
              return (
                <div key={item.id} className="vieworders">
                  <p>Item Name: {item.custname}</p>
                  <p>Order Type: {item.itemset}</p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              );
            })
          : "Loading"}
      </div>
    </div>
  );
}
export default ViewOrder;
