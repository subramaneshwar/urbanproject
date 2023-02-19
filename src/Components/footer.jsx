import "./fotter.css";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footercontent">
        <div className="footerinfo">
          <div className="footeraboutus">
            <div className="footerheading">
              <h2>About Us</h2>
            </div>
            <div className="footerlist">
              <p>Support Center</p>
              <p>Customer Support</p>
              <p>About Us</p>
              <p>Copyright</p>
            </div>
          </div>
          <div className="footeraboutus">
            <div className="footerheading">
              <h2>Our Information</h2>
            </div>
            <div className="footerlist">
              <p>Return Policy</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Site Map</p>
            </div>
          </div>
          <div className="footeraboutus">
            <div className="footerheading">
              <h2>My Account</h2>
            </div>
            <div className="footerlist">
              <p>Press inquires</p>
              <p>Social Media</p>
              <p>directories</p>
              <p>Images & B-roll</p>
            </div>
          </div>
          <div className="footeraboutus">
            <div className="footerheading">
              <h2>Contact</h2>
            </div>
            <div className="footerlist contactlinks">
              <p>
                <a href="https://google.com">
                  <BsFacebook />
                </a>
                Facebook
              </p>
              <p>
                <a href="https://google.com">
                  <BsLinkedin />
                </a>
                Linkedin
              </p>
              <p>
                <a href="https://google.com">
                  <FaInstagram />
                </a>
                Instagram
              </p>
            </div>
          </div>
        </div>

        <div className="footerimages">
          <img
            src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png"
            alt=""
          />
          <img
            src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png"
            alt=""
          />
          <img
            src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}