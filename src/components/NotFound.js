import React from "react";
import { Link } from "react-router-dom";
import My404 from "../images/page.png";

function NotFound() {
  return (
    <div className="content">
      {/* <Nav /> */}
      <h2 style={{ textAlign: "center" }}>Oops... page not found.</h2>
      <img src={My404} style={{ width: "40rem" }} alt="" />
      <h2 style={{ textAlign: "center" }}>
        Go back to{" "}
        <Link to="/" style={{ color: "#f1356d", textDecoration: "none" }}>
          Home
        </Link>{" "}
        page...
      </h2>
    </div>
  );
}

export default NotFound;
