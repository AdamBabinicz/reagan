import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import img from "../images/2.svg";

const NavSec = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("fixed");
  }

  return (
    <>
      <Navbar className={x.join("")} light expand="md">
        <Link to="" className="navbar-brand">
          <img src={img} alt="..." /> RWR
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto navbar-nav" navbar>
            <NavItem>
              <Link to="/">Start</Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio">Republikanin</Link>
            </NavItem>
            <NavItem>
              <Link to="/setup">Prezydentura</Link>
            </NavItem>
            <NavItem>
              <Link to="/about-me">RWR</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavSec;
