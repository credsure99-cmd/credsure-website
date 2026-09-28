import React, { useState } from "react";
import "./App.css";

const services = [
  {
    icon: "⌁",
    title: "Scan & Pay",
    description: "Scan supported QR codes and make quick payments.",
  },
  {
    icon: "▣",
    title: "Credit Card Bills",
    description: "Pay your credit card bills easily from one place.",
  },
  {
    icon: "⌂",
    title: "Pay Rent",
    description: "Make your monthly rent payments simply and conveniently.",
  },
  {
    icon: "◉",
    title: "Mobile Recharge",
    description: "Recharge your mobile number quickly and easily.",
  },
  {
    icon: "◇",
    title: "Tuition Fees",
    description: "Pay eligible education and tuition fees with ease.",
  },
  {
    icon: "+",
    title: "More Services",
    description: "More useful payment services are coming soon.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="navbar-container">

          <div
            className="brand"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/CredSure-long.png"
              alt="CredSure"
            />
          </div>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("services")}>
              Services
            </button>

            <button onClick={() => scrollToSection("why")}>
              Why CredSure
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>

          </nav>

          <button
            className="get-started"
            onClick={() => scrollToSection("services")}
          >
            Get Started
          </button>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-left">

          <div className="hero-badge">
            <span></span>
            Smart & Simple Payments
          </div>

          <h1>
            One place for
            <br />
            all your
            <span> payments.</span>
          </h1>

          <p>
            Pay your bills, recharge your mobile,
            pay rent, scan & pay and more —
            all from one simple platform.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollToSection("services")}
            >
              Explore Services
              <b>→</b>
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("why")}
            >
              Why CredSure?
            </button>

          </div>

          <div className="hero-points">

            <div>
              <strong>01</strong>
              <span>Simple</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Convenient</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Secure</span>
            </div>

          </div>

        </div>


        {/* ================= HERO RIGHT ================= */}

        <div className="hero-right">

          <div className="hero-circle circle-one"></div>
          <div className="hero-circle circle-two"></div>

          <div className="payment-card">

            <div className="payment-card-top">
              <strong>CredSure</strong>
              <span>•••</span>
            </div>

            <div className="payment-card-content">

              <small>
                Smart payment experience
              </small>

              <h2>
                Pay smarter.
                <br />
                Live easier.
              </h2>

            </div>

            <div className="payment-card-bottom">

              <span>SCAN</span>
              <span>PAY</span>
              <span>GO</span>

            </div>

          </div>


          {/* FLOATING ITEM 1 */}

          <div className="floating-item item-one">

            <div className="floating-icon">
              ⌁
            </div>

            <div>
              <small>Scan & Pay</small>
              <strong>Quick Payment</strong>
            </div>

          </div>


          {/* FLOATING ITEM 2 */}

          <div className="floating-item item-two">

            <div className="floating-icon">
              ▣
            </div>

            <div>
              <small>Credit Card</small>
              <strong>Bill Payment</strong>
            </div>

          </div>


          {/* FLOATING ITEM 3 */}

          <div className="floating-item item-three">

            <div className="floating-icon">
              ◉
            </div>

            <div>
              <small>Mobile</small>
              <strong>Recharge</strong>
            </div>

          </div>


          <div className="hero-small-logo">

            <img
              src="/CredSure-short.png"
              alt="CredSure"
            />

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services" id="services">

        <div className="section-title">

          <span>OUR SERVICES</span>

          <h2>
            Everything you need,
            <br />
            <em>in one place.</em>
          </h2>

          <p>
            Useful payment services designed
            for everyday transactions.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => (

            <div
              key={service.title}
              className={
                activeService === index
                  ? "service-card active"
                  : "service-card"
              }
              onClick={() =>
                setActiveService(
                  activeService === index
                    ? null
                    : index
                )
              }
            >

              <div className="service-header">

                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-arrow">
                  ↗
                </span>

              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <div className="service-footer">

                <span>
                  COMING SOON
                </span>

                <div></div>

              </div>

              {activeService === index && (

                <div className="service-message">
                  We're working on this service.
                </div>

              )}

            </div>

          ))}

        </div>

      </section>


      {/* ================= WHY CREDSURE ================= */}

      <section className="why" id="why">

        <div className="why-content">

          <span>
            WHY CREDSURE
          </span>

          <h2>
            Payments should be
            <br />
            <strong>simple.</strong>
          </h2>

          <p>
            CredSure brings useful payment services
            together in one clean and convenient
            experience.
          </p>

          <button
            className="primary-btn"
            onClick={() => scrollToSection("services")}
          >
            Explore CredSure
            <b>→</b>
          </button>

        </div>


        <div className="why-list">

          <div className="why-card">

            <strong>01</strong>

            <div>
              <h3>One Platform</h3>

              <p>
                Multiple everyday payment services
                from one place.
              </p>
            </div>

          </div>


          <div className="why-card">

            <strong>02</strong>

            <div>
              <h3>Easy Experience</h3>

              <p>
                A clean and simple experience
                for everyday payments.
              </p>
            </div>

          </div>


          <div className="why-card">

            <strong>03</strong>

            <div>
              <h3>Built to Grow</h3>

              <p>
                New payment services can be
                added as CredSure grows.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <div className="cta-logo">

          <img
            src="/CredSure-short.png"
            alt="CredSure"
          />

        </div>

        <h2>
          Your payments.
          <br />
          <span>One simple place.</span>
        </h2>

        <p>
          More services. More convenience. One CredSure.
        </p>

        <button
          className="cta-button"
          onClick={() => scrollToSection("services")}
        >
          Get Started
          <b>→</b>
        </button>

      </section>


      {/* ================= FOOTER ================= */}

      <footer id="contact">

        <div className="footer-content">

          <div className="footer-brand">

            <img
              src="/CredSure-long.png"
              alt="CredSure"
            />

            <p>
              Simple, smart and convenient
              payment experiences.
            </p>

          </div>


          <div className="footer-column">

            <h4>Explore</h4>

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("services")}>
              Services
            </button>

            <button onClick={() => scrollToSection("why")}>
              Why CredSure
            </button>

          </div>


          <div className="footer-column">

            <h4>Services</h4>

            <button onClick={() => scrollToSection("services")}>
              Scan & Pay
            </button>

            <button onClick={() => scrollToSection("services")}>
              Credit Card Bills
            </button>

            <button onClick={() => scrollToSection("services")}>
              Pay Rent
            </button>

            <button onClick={() => scrollToSection("services")}>
              Mobile Recharge
            </button>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 CredSure. All rights reserved.
          </span>

          <span>
            Smart & Simple Payments
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;