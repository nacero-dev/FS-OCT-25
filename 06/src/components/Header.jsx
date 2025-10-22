// src/components/Header.jsx
import React from "react";

function Header({ siteName, links }) {
  return (
    <header style={styles.header}>
      <h1>{siteName}</h1>
      <nav>
        <ul style={styles.navList}>
          {links.map((link, index) => (
            <li key={index} style={styles.navItem}>
              <a href={link.href} style={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "red",
    color: "#fff",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    color: "#61dafb",
    textDecoration: "none",
  },
};

export default Header;
