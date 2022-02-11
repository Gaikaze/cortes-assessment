import React from "react";

function Contact() {
  return (
    <div class="mapouter">
      <h1>CONTACT</h1>
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=SM%20davao&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>

        <a href="https://www.embedgooglemap.net"></a>
        <h2>Contact Number: </h2>
        <p>09090909091</p>
        <h2>Address: </h2>
        <p>SM Davao City</p>
      </div>
    </div>
  );
}

export default Contact;
