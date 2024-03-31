import React from 'react';
import './Footer.css';
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
    return (
        <footer class="footer">
  <div class="container">
  
    <div class="left-section">
      <p>BE THE FIRST TO KNOW</p>
      <br />
      <h6>Sign up for updates from meta muse</h6>
      <div class="input-container">
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
    

    <div class="right-section">
      <ul> <li><strong>CONTACT US</strong></li>
      <li>+44 221 133 5880</li>
      <li>customercare@mettamuse.com</li></ul>
    </div>
    
    <div class="right-section2"> 
      <ul><li><strong>CURRENCY </strong></li>
      <li><strong>USD.</strong><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27dUuglFycaYGzd4iD8NWHZAKvbYCfZa1te-ALlankA&s'alt='img' /></li>
      <li>Transactions will be completed in Euros and a currency translator is available on hover.</li> </ul>
    </div>
  </div>

 
  <div class="below-section">
    <div class="left-section2">
      <p><strong>metta muse </strong></p>
      <ul>
        <li>About Us</li>
        <li>Stories</li>
        <li>Artisans</li>
        <li>Boutiques</li>
        <li>Contact Us</li>
        <li>EU Compliances Docs</li>
      </ul>
    </div>
  </div>


  <div class="quick-links">
    <p><strong>QUICK LINKS</strong></p>
    <ul>
      <li>Orders & Shipping</li>
      <li>Join/Login as a Seller</li>
      <li>Payment & Pricing</li>
      <li>Return & Refunds</li>
      <li>FAQs</li>
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
    </ul>
  </div>
  

  <div class="follow-us">
    <p>FOLLOW US</p>
    <div class="social-icons">
    <IoLogoFacebook />
    <FaInstagram />
    <CiLinkedin />
    </div>
  </div>
  

  <div class="payment-methods">
    <p>mettā muse ACCEPTS</p>
    <img src= "https://i.pinimg.com/originals/06/60/11/066011ee532a233a5d188d2cc647dec8.png" alt="gpay"/>
    <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2016-2020.png" alt="Mastercard" />
    <img src="https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png" alt="PayPal" />
    <img src="https://th.bing.com/th/id/OIP.XRL0w4SJR3mWJef6vaFWlQHaHb?rs=1&pid=ImgDetMain" alt ="amex"/>
    <img src = "https://logos-world.net/wp-content/uploads/2022/03/Apple-Pay-Emblem.png" alt = "apay"/>
  </div>
  

  <p class="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
</footer>

    );
}

export default Footer;