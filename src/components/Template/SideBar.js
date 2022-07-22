import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Edward Sadoon</h2>
        <p><a href="mailto:ed.sadoon@gmail.com">ed.sadoon@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, thank you for stopping by!

        I&apos;m a Data Engineer who&apos;s experienced in the FinTech industry.
        My experience is centered around data warehousing,
        data wrangling and analysis,
        and pipeline builds and orchestration using SQL, Python, Azure, and Apache Airflow.
      </p>

    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Edward Sadoon</p>
    </section>
  </section>
);

export default SideBar;
