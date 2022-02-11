import React from "react";
import btsshirt from "../assets/btsshirt.jpg";
import btsmug from "../assets/BTSmug.jpg";
import btskeychain from "../assets/btskeychain.jpg";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
function Menu() {
  return (
    <div className="ads">
      <img src={banner} alt="" />
      <div className="menu">
        <h1>MENU ITEMS</h1>
        <img className="shirt" src={btsshirt} alt="" />
        <h2>BTS-Shirt</h2>
        <h2>Price: ₱ 1,200</h2>
        <Link to="/vieworder">Check if it's available</Link>&nbsp;&nbsp;
        <img className="btsmug" src={btsmug} alt="" />
        <h2>BTS-Mug</h2>
        <h2>Price: ₱ 1,000</h2>
        <Link to="/vieworder">Check if it's available</Link>&nbsp;&nbsp;
        <img className="btskeychain" src={btskeychain} alt="" />
        <h2>BTS-Keychain</h2>
        <h2>Price: ₱ 1,500</h2>
        <Link to="/vieworder">Check if it's available</Link>&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default Menu;
