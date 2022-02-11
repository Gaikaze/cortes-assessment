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

function EditOrder() {
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
  const updateOrder = async (e, id) => {
    e.preventDefault();
    let userOrder = doc(firestore, "Orders", id);
    let newFields = {
      price,
      quantity,
    };

    await updateDoc(userOrder, newFields).then(() => {
      alert("Item updated successfully.");
    });
  };

  //Delete order
  const deleteOrder = async (id) => {
    console.log(id);
    let userOrder = doc(firestore, "Orders", id);
    await deleteDoc(userOrder).then(() => {
      alert("Item deleted succesfully.");
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
      <h1>Sale List</h1>
      <div className="listorders">
        {visible
          ? orders.map((item, i) => {
              return (
                <>
                  <form
                    key={item.id}
                    onSubmit={(e) => updateOrder(e, item.id)}
                    className="edit"
                  >
                    <p>Item Name: {item.custname}</p>
                    <p>Item Type: {item.itemset}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <input
                      value={price}
                      type="number"
                      min={0}
                      required
                      placeholder="Price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    <input
                      value={quantity}
                      type="number"
                      min={0}
                      required
                      placeholder="Quantity"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    {/* <br />
                    <input value={getTotal()} type="text" disabled /> */}
                    <br />
                    <button type="submit">Update</button>

                    <button
                      className="delete"
                      type="button"
                      onClick={() => {
                        deleteOrder(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </form>
                </>
              );
            })
          : "Loading"}
      </div>
    </div>
  );
}
export default EditOrder;
