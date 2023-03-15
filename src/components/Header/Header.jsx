import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Container from "../Layout/Container";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header">
          <a className="brand" href="/" title="Home">
            <h1 className="brand__logo">MyKläder!</h1>
          </a>
        </div>
        <Breadcrumbs />
      </Container>
    </header>
  );
};

export default Header;
