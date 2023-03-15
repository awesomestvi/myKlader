import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <a className="breadcrumbs__link" href="/" title="Home">
        Home
      </a>
      <span className="breadcrumbs__spacer">/</span>
      <span className="breadcrumbs__active">Browse products</span>
    </div>
  );
};

export default Breadcrumbs;
