import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { firestore } from "../shared/configs/firebase";

function Order() {
  const [date, setDate] = useState(new Date());
  const [custname, setCustName] = useState("");
  const [ordercategory, setOrderCategory] = useState("");
  const [type, setType] = useState("");
  const [itemset, setItemsSet] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  //CreateUser
  const addOrder = async (e) => {
    e.preventDefault();
    let data = {
      date,
      custname,

      itemset,

      quantity,
      price,
      total: getTotal(),
    };
    await addDoc(collection(firestore, "Orders"), data).then(() => {
      alert("Successfully added a new Item!");
    });
  };
  function getTotal() {
    return quantity * price;
  }
  return (
    <div className="order">
      <h1>ADD ITEMS</h1>
      <form onSubmit={addOrder}>
        <br />
        <input
          value={custname}
          type="text"
          required
          placeholder="Item Name"
          onChange={(e) => setCustName(e.target.value)}
        />
        <br />

        <select
          value={itemset}
          required
          placeholder="Select Option"
          onChange={(e) => setItemsSet(e.target.value)}
        >
          <option value="Shirt">Shirt</option>
          <option value="MUG">Mug</option>
          <option value="Accessories">Accessories</option>
        </select>
        <input
          value={quantity}
          type="number"
          min={0}
          required
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          value={price}
          type="number"
          required
          min={0}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Order;
