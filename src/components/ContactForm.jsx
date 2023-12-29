import "../components/ContactForm.css";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_segfo1f', 'template_m8rzli8', form.current, 'z4iQNKsh8tblpOQsb')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
   };

    return (
    <div className="form-container">
     <h1>
        Send a Message to Us!
     </h1>
     <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
     <input type="text" name="to_name" required/>
     <label>Email</label>
     <input type="email" name="from_email" required/>  
     <label>Message</label>
      <input name="message"  rows="4" required/>
     <button aria-required type="submit">Send Message </button>
    </form>
    </div>
    );
  }
  export default ContactForm;
  