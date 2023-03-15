import React from "react";
import Container from "../Layout/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer">
          <h1 className="brand__logo">MyKläder!</h1>
          <span className="footer__tagline">
            Specializes in providing high-quality, stylish products for your
            wardrobe.
          </span>
          <div className="footer__copyright">
            <small>
              &copy; Copyright {new Date().getFullYear()}, MyKläder AB. All
              rights reserved.
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
