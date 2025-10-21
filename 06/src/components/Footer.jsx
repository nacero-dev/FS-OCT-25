// src/components/Footer.jsx
import React from "react";

function Footer({ message }) {
  return (
    <footer style={styles.footer}>
      <p>{message}</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1347b0ff",
    color: "#b6c5daff",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  },
};

export default Footer;
