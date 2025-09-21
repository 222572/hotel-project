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
          <h2 className="contact-us-hd">დაგვიკავშირდით</h2>
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
                    მისამართი
                  </a>
                </h3>
                <p>
                  წერეთლის 8, სენაკი <br />
                  MR Hotel <br />
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>ტელეფონი</h3>
                <p>+995(123)-45-67-89</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>ემაილი</h3>
                <p>MR@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form>
              <h2>მესიჯის გაგზავნა</h2>
              <div className="inputBox">
                <input
                  type="text"
                  name=""
                  required="required"
                  className="contact-input"
                />
                <span>სახელი და გვარი</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name=""
                  required="required"
                  className="contact-input"
                />
                <span>ემაილი</span>
              </div>
              <div className="inputBox">
                <textarea
                  required="requred"
                  className="contact-input"
                ></textarea>
                <span>შენი მესიჯი ...</span>
                <div className="newsletter-checkbox">
                  <input type="checkbox" id="newsletter" name="newsletter" />
                  <label htmlFor="newsletter">სიახლეების მიღება</label>
                </div>
              </div>
              <div className="inputBox">
                <input
                  type="submit"
                  name=""
                  value="გაგზავნა"
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
