import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  form.submit();  // Sends the form to Formspree
  form.reset();   // Resets the form fields
};

  return (

    
    <div className="contact-section section-container" id="contact">
      
      <div className="contact-container">
        <h3>Contact</h3>

        {/* Contact Form */}
        <form
        onSubmit={handleFormSubmit}
          className="contact-form"
          action="https://formspree.io/f/xeqwlrgg"
          target="_blank"
          method="POST"
        >
          <div className="input-box">
            <input type="text" name="Name" placeholder="Full Name" required />
            <input type="email" name="Email" placeholder="Email Address" required />
          </div>
          <div className="input-box">
            <input type="tel" name="Mobile Number" placeholder="Mobile Number" />
            <input type="text" name="Subject" placeholder="Email Subject" />
          </div>
          <textarea name="Message" rows={6} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        
       
        <div className="contact-flex">
          {/* Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:srikanthkarthi2003@gmail.com" data-cursor="disable">
                srikanthkarthi2003@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+9345810993" data-cursor="disable">
                +91 9345810993
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/srikanth-karthi"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/srikanth-karthikeyan"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/SRIKANTH_212003"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://instagram.com/srikanth_karthikeyan_"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Developer Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Srikanth K</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>

 
      </div>
    </div>
  );
};

export default Contact;
