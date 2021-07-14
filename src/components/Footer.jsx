import React from "react";
import "../styles/footer.css";

function Footer()
{
    return(<>
     <div className="Footer">
     <div className="Footer_left">
     <h1 id="Footer_logo"><span>my</span><br/>IIT FRIENDS </h1>
     <ul>
        <a href="#"> <li>About us</li></a>
        <a href="#"> <li>Contact</li></a>
        <a href="#"> <li>Terms & condintion</li></a>
     </ul>
     </div>
     <div className="Footer_right">
      <a href="#"><h3>insta</h3></a>
      <a href="#"><h3>facebook</h3></a>
      <a href="#"><h3>twitter</h3></a>
     </div>
     <div className="Footer_email">
      <input type="text" placeholder="Email Address"/><br/>
      <button><strong>OK</strong></button>
     </div>
     </div>
     </>
    );
}
export default Footer;