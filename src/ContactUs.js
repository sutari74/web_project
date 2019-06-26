import React, { Component } from "react";
import img from './images/contactus.jpg';
 
class ContactUs extends Component {
  render() {
    return (
      <div>
        
		<section class="leftAlign">
		  <img src={img} class="imgClass" />
		</section>
        <section class="rightAlign">
		<h2>Get in Touch</h2>
		  <table>
		    <tr>
			  <td>Name</td>
			  <td>
			     <input type="text"></input>
			  </td>
			</tr>
            <tr>
              <td> Email </td>
              <td>
                 <input type="text"></input>
              </td>
            </tr>
            <tr>
               <td> Website </td>
               <td>
                  <input type="text"></input>
               </td>
            </tr>
            <tr>
               <td> Comment </td>
               <td>
                  <textarea rows="4" cols="50"></textarea>
               </td>
            </tr>
            <tr>
               <td></td>                      
            	<td>						
            		<input type="submit" name="submit" value="Submit"></input>							
                </td>
            </tr>
		  </table>
		
		</section>
		
      </div>
    );
  }
}
 
export default ContactUs;
