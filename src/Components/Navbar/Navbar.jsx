import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import logo from "Images/ProfileX.jpg";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="md" color="white">
      <Navbar.Brand href="/" className="text-white m-2 mb-0 mt-0">
        ShowBIZZ
      </Navbar.Brand>
    </Navbar>
  );
};

export default MyNavbar;
