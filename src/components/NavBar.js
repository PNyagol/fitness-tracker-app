import React from "react";
import { Navbar } from "react-bootstrap";

const navLinks = [
  { link: "/", name: "Fitness Tracker" },
  { link: "/workout-form", name: "Workout Form" },
  { link: "/workout-list", name: "Workout List" },
];

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{
        width: "100vw",
        backgroundColor: "green",
        paddingInline: "1rem",
      }}
    >
      <ul style={{ width: "100%", textTransform: "uppercase" }}>
        {navLinks.map(({ link, name }, i) => (
          <li style={{ listStyle: "none" }} key={i}>
            <Navbar.Brand href={link}>{name}</Navbar.Brand>
          </li>
        ))}
      </ul>
    </Navbar>
  );
};

export default NavBar;
