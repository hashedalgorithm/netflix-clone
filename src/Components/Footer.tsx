import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="Home_footer">
      <p className="Footer_phone">
        Questions ? Call
        <a href="tel:000-800-040-1843"> 000-800-040-1843</a>
      </p>
      <div className="Footer_s1">
        <ul className="footerlist">
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#investorrealtions">Investor Relations</a>
          </li>
          <li>
            <a href="#privacy">Privacy</a>
          </li>
          <li>
            <a href="#Speedtest">Speed Test</a>
          </li>
        </ul>
        <ul className="footerlist">
          <li>
            <a href="#helpcenter">Help Centre</a>
          </li>
          <li>
            <a href="#jobs">Jobs</a>
          </li>
          <li>
            <a href="#cookiepreferences">Cookie Preferences</a>
          </li>
          <li>
            <a href="#legalnotices">Legal Notices</a>
          </li>
        </ul>
        <ul className="footerlist">
          <li>
            <Link to="/signin">Account</Link>
          </li>
          <li>
            <a href="#waystowatch">Ways to Watch</a>
          </li>
          <li>
            <a href="#corporateinfo">Corporate Information</a>
          </li>
        </ul>
        <ul className="footerlist">
          <li>
            <a href="#mediaconter">Media Centre</a>
          </li>
          <li>
            <a href="#termsofuse">Terms of Use</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
          <li>
            <a href="#netflixoriginals">Netflix Originals</a>
          </li>
        </ul>
      </div>
      <div className="Footer_lang">
        <select name="lang" className="lang">
          <option value="english">English</option>
          <option value="hindhi">हिन्दी</option>
        </select>
        <p>Netflix India</p>
      </div>
    </div>
  );
}

export default Footer;
