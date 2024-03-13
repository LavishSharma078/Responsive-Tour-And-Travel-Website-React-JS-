// import "./ContactFormStyles.css";

// function ContactForm() {
//   return (
//     <div className="from-container">
//       <h1>Send a message to us!</h1>
//       <form>
//         <input placeholder="Full Name" />
//         <input placeholder="Email" />

//         <textarea placeholder="Subject" />
//         <textarea placeholder="Message" rows="4"></textarea>
//         <button>Send Message</button>
//       </form>
//     </div>
//   );
// }
//   export default ContactForm;

import "./ContactFormStyles.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eye9zkc",
        "template_5p4ilcn",
        form.current,
        "goRkOPg1u2uefUDut",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Full Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <input type="text" name="user_subject" placeholder="Subject" />

        <textarea name="message" placeholder="Message" rows="4"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default ContactForm;
