import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactBody">
      <section
        className="contactPage"
        style={{
          backgroundSize: "cover",
        }}
      >
        <div className="content">
          <h2 className="contact-us-hd">Contact Us </h2>
        </div>

        <div className="mycontainer">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>
                  <a
                    href="https://maps.app.goo.gl/cGAxS86SiES8gjZx5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="address-link"
                  >
                    Address
                  </a>
                </h3>
                <p>
                  3600 Oni, Shovi, <br />
                  MR Hotel <br />
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+995(123)-45-67-89</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>MR@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  name=""
                  required="required"
                  className="contact-input"
                />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name=""
                  required="required"
                  className="contact-input"
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea
                  required="requred"
                  className="contact-input"
                ></textarea>
                <span>Type your message ...</span>
                <div className="newsletter-checkbox">
                  <input type="checkbox" id="newsletter" name="newsletter" />
                  <label htmlFor="newsletter">A newsletter subscription</label>
                </div>
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  name=""
                  value="Send"
                  className="contact-input"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
