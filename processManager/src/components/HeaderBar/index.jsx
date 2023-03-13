import { React, useState } from "react";
import Navbar from "react-bootstrap/Navbar";

export default function HeaderBar() {
  return (
    <div className="topnav">
      <Navbar
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
        className="topnav"
      >
        <Navbar.Brand href="">Process Manager</Navbar.Brand>
      </Navbar>
    </div>
  );
}
