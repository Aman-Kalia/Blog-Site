import './contactus.css';
 import React from 'react';
 

 
 export default function Contactus() {
   return (
        <div class="container">
            <div class="contact-box">
            <div class="left"></div>
            <div class="right">
                <h2>Contact Us</h2>
                <input type="text" class="field" placeholder="Your Name" required/>
				<input type="email" class="field" placeholder="Your Email" required/>
				<input type="text" class="field" placeholder="Phone" required/>
                <textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
            </div>
            </div>
	    </div>
    );
 }
 
 