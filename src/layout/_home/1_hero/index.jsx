import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div>
        <h1>The Shortcut</h1>
        <h2>
          Accelerating talent through tech startups &amp; high growth companies
        </h2>
        <div className={css.buttons}>
          <Link to="/events">For Talents</Link>
          <Link to="/forpartners">Collaborate with Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
