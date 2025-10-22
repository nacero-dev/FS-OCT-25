// src/components/Section.jsx
import React from "react";

function Section({ title, content }) {
  return (
    <section style={styles.section}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

const styles = {
  section: {
    margin: "2rem 0",
    padding: "1rem",
    backgroundColor: "green",
    borderRadius: "8px",
  },
};

export default Section;
