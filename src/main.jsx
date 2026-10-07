import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  House,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
  Zap,
  Snowflake,
  Paintbrush,
  SprayCan,
  Hammer,
  Bug,
  Upload
} from "lucide-react";
import "./styles.css";

const services = [
  ["Plumbing", Wrench, "https://www.helpiify.com/service-details/ce1e1dce-37c7-49d3-bdd7-655f76a589c5/07a5c1d1-0fde-4da6-9102-66b9d1591dfe"],
  ["AC Service", Snowflake, "https://www.helpiify.com/service-details/122a1252-287b-4453-8a7d-605dda9757f7/e4465fda-3a3d-41c0-a260-2713b826ba1c"],
  ["Deep Cleaning", SprayCan, "https://www.helpiify.com/service-details/4d1a1b51-4682-4819-86a4-fd26aed292f9/b5a5948b-64ba-4b1e-8857-ffb073b3b68a"],
  ["Electrical", Zap, "https://www.helpiify.com/service-details/61711018-a763-4d30-b96f-ff864974d953/ed425f76-127a-40d8-8569-38456a68854a"],
  ["Appliance Repair", Wrench, "https://www.helpiify.com/service-details/2d918284-a1ff-4c0c-bfc0-b5ce9cf089dc/a448dcb0-d3d5-46a0-b640-d46c2dc74fa6"],
  ["Carpenter", Hammer, "https://www.helpiify.com/service-details/8698aea5-bf8a-4d64-83db-b9a43e432efa/498dbc54-4c95-4c2f-9fd7-a42560d77fea"],
  ["Painter", Paintbrush, "https://www.helpiify.com/service-details/e30ca59b-43f9-4710-8132-4a044bf897d6/7409adca-82d8-4005-b3ab-6eab78cdc52a"],
  ["Pest Control", Bug, "https://www.helpiify.com/service-details/0f513edc-64e5-4303-acf6-3976a1f5a551/2ca9f5ea-c99b-4e51-aee8-5a17da28dd8c"]
];

const jobs = [
  ["Frontend Developer", "Development", "2-4 Years", Wrench],
  ["Backend Developer", "Development", "2-4 Years", Zap],
  ["Sales Executive", "Sales", "1-3 Years", Phone],
  ["Digital Marketing Executive", "Marketing", "1-3 Years", Sparkles],
  ["Customer Support Executive", "Support", "0-2 Years", Users]
];

const trustStats = [
  ["12k+", "Happy homeowners"],
  ["4.9/5", "Average rating"],
  ["15 min", "Average response"],
  ["400+", "Verified pros"]
];

const benefitPillars = [
  { icon: ShieldCheck, title: "Verified professionals", text: "Every expert is screened, trained, and trusted for quality results." },
  { icon: Clock3, title: "On-time service", text: "Quick scheduling and dependable arrival times for every home job." },
  { icon: CheckCircle2, title: "Transparent pricing", text: "Clear estimates with no surprise charges or confusing add-ons." },
  { icon: Users, title: "Customer-first support", text: "Friendly help before, during, and after every service request." }
];

const processSteps = [
  { number: "01", icon: Search, title: "Choose your service", text: "Select the home fix or maintenance need you want handled." },
  { number: "02", icon: Users, title: "Get matched", text: "We connect you with the best verified professional nearby." },
  { number: "03", icon: CheckCircle2, title: "Relax and enjoy", text: "Track progress, approve the job, and enjoy a hassle-free experience." }
];

const testimonials = [
  {
    quote: "The booking process was incredibly smooth and the technician arrived exactly on time. Highly recommended.",
    name: "Amit Sharma",
    role: "Homeowner"
  },
  {
    quote: "Professional, clean, and easy to work with. The pricing was clear and there were no hidden charges.",
    name: "Priya Verma",
    role: "Customer"
  },
  {
    quote: "I needed urgent help and Helpiify matched the right expert fast. The whole experience felt premium.",
    name: "Rahul Jain",
    role: "Customer"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Trusted home services at your doorstep</span>
          <a href="tel:+919999999999">
            <Phone size={12} />
            +91 99999 99999
          </a>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a href="#home" className="logo" onClick={closeMenu}>
            <div className="brand-mark" aria-label="Helpiify logo">
              <span className="mark-light">help</span>
              <span className="mark-accent">iify</span>
            </div>
            <div className="brand-wordmark" aria-label="Helpiify home services">
              <strong>helpiify</strong>
              <small>HOME SERVICES</small>
            </div>
          </a>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#how" onClick={closeMenu}>How it works</a>
            <a href="#why" onClick={closeMenu}>Why us</a>
            <a href="#careers" onClick={closeMenu}>Careers</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Book a Service
          </a>

          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-shape one"></div>
          <div className="hero-shape two"></div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="pill">
                <Sparkles size={12} />
                TRUSTED HOME SERVICES
              </span>

              <h1>
                Home services
                <br />
                <span>that feel effortless.</span>
              </h1>

              <p>
                From urgent repairs to regular upkeep, Helpiify connects you with
                verified professionals for reliable, on-time home service at the right price.
              </p>

              <form className="booking-box" onSubmit={handleQuoteSubmit}>
                <div className="field">
                  <Search size={17} />
                  <input type="text" placeholder="Service needed" required />
                </div>

                <div className="field">
                  <MapPin size={17} />
                  <input type="text" placeholder="Your location" required />
                </div>

                <button type="submit">
                  Book now
                  <ArrowRight size={16} />
                </button>
              </form>

              <div className="trust-row">
                <span><CheckCircle2 size={14} /> Verified experts</span>
                <span><CheckCircle2 size={14} /> Transparent pricing</span>
                <span><CheckCircle2 size={14} /> 24/7 support</span>
              </div>

              {quoteSubmitted && (
                <div className="success-message compact-success">
                  <CheckCircle2 size={18} />
                  Your request has been received. Our team will contact you soon.
                </div>
              )}
            </div>

            <div className="hero-visual">
              <div className="main-card">
                <div className="visual-top">
                  <span>HELPIIFY</span>
                  <span className="rating">
                    <Star size={13} fill="currentColor" />
                    4.9
                  </span>
                </div>

                <div className="person-art">
                  <div className="person-head"></div>
                  <div className="person-body"></div>
                  <div className="tool"></div>
                </div>

                <div className="visual-caption">
                  <b>Trusted Professionals</b>
                  <small>Fast bookings, quality work, dependable care.</small>
                </div>
              </div>

              <div className="float-card">
                <ShieldCheck size={24} />
                <div>
                  <b>Verified pros</b>
                  <small>Safe and reliable</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">
            {trustStats.map(([value, label]) => (
              <div className="stat-box" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-head">
              <span className="mini">POPULAR SERVICES</span>
              <h2>Everything your home needs</h2>
              <p>
                Choose from essential home services designed to save time, reduce stress,
                and keep your space comfortable and well maintained.
              </p>
            </div>

            <div className="service-grid">
              {services.map(([name, Icon, link]) => (
                <a className="service-card" key={name} href={link} target="_blank" rel="noreferrer">
                  <span className="service-icon">
                    <Icon size={25} strokeWidth={2.2} />
                  </span>
                  <b>{name}</b>
                  <small>
                    Book now <ArrowRight size={14} />
                  </small>
                </a>
              ))}
            </div>

            <div className="center">
              <a href="https://www.helpiify.com" className="outline-btn" target="_blank" rel="noreferrer">
                View all services <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section why" id="why">
          <div className="container why-grid">
            <div className="why-art">
              <div className="yellow-ring"></div>
              <div className="home-art">
                <House size={70} strokeWidth={1.5} />
              </div>
              <div className="badge-card">
                <ShieldCheck size={27} />
                <b>Trusted service</b>
                <small>Professionals you can rely on</small>
              </div>
            </div>

            <div>
              <span className="mini">WHY HELPIIFY</span>
              <h2>
                Better service.
                <br />
                Better <span>living.</span>
              </h2>

              <p className="lead">
                We’ve built a home service experience that is simple, trustworthy, and respectful of your time.
                Every booking is managed with care, clarity, and quality standards you can count on.
              </p>

              <div className="features">
                {benefitPillars.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="feature-item">
                    <span><Icon size={20} /></span>
                    <div>
                      <b>{title}</b>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section process" id="how">
          <div className="container">
            <div className="section-head">
              <span className="mini">HOW IT WORKS</span>
              <h2>Get the job done in 3 easy steps</h2>
              <p>From first click to final service — your experience stays simple and stress-free.</p>
            </div>

            <div className="steps">
              {processSteps.map(({ number, icon: Icon, title, text }) => (
                <div key={number} className="step-card">
                  <span>{number}</span>
                  <div className="step-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote-section" id="booking">
          <div className="container quote-grid">
            <div className="quote-copy">
              <span className="mini">FAST BOOKING</span>
              <h2>Need help at home today?</h2>
              <p>
                Tell us what you need and we’ll connect you with a qualified professional who can help quickly and professionally.
              </p>

              <ul className="quote-points">
                <li><CheckCircle2 size={16} /> Same-day service availability</li>
                <li><CheckCircle2 size={16} /> Transparent pricing with no surprises</li>
                <li><CheckCircle2 size={16} /> Friendly support from start to finish</li>
              </ul>
            </div>

            <form className="quote-form" onSubmit={handleQuoteSubmit}>
              <input type="text" placeholder="Full name" required />
              <input type="tel" placeholder="Phone number" required />
              <select required defaultValue="">
                <option value="" disabled>Select service</option>
                {services.map(([name]) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
              <input type="text" placeholder="City / locality" required />
              <textarea rows="4" placeholder="Tell us about the issue" required></textarea>
              <button type="submit">
                Request a callback
                <ArrowRight size={17} />
              </button>
              {quoteSubmitted && (
                <div className="success-message">
                  <CheckCircle2 size={18} />
                  Quote request sent successfully.
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="section careers" id="careers">
          <div className="container careers-container">
            <div className="careers-content">
              <span className="mini">CAREERS AT HELPIIFY</span>
              <h2>
                Build your career
                <br />
                <span>with Helpiify</span>
              </h2>
              <p>
                Join a growing team that values service, learning, and customer trust. Help us deliver quality care to homeowners every day.
              </p>

              <div className="career-actions">
                <a href="#open-positions" className="career-primary">
                  View positions
                  <ArrowRight size={17} />
                </a>
                <a href="#career-apply" className="career-secondary">
                  Send resume
                  <Upload size={17} />
                </a>
              </div>
            </div>

            <div className="careers-visual">
              <div className="career-circle"></div>
              <div className="career-card">
                <div className="career-card-top">
                  <span>HELPIIFY</span>
                  <span className="career-badge">WE'RE HIRING</span>
                </div>
                <div className="career-person">
                  <div className="career-head"></div>
                  <div className="career-body"></div>
                </div>
                <div className="career-card-bottom">
                  <b>Grow with us</b>
                  <small>Learn • Build • Grow • Impact</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section open-positions" id="open-positions">
          <div className="container">
            <div className="section-head">
              <span className="mini">JOIN OUR TEAM</span>
              <h2>
                Open <span>positions</span>
              </h2>
              <p>Find your next opportunity and grow alongside a strong service brand.</p>
            </div>

            <div className="career-jobs">
              {jobs.map(([title, dept, exp, Icon]) => (
                <div className="career-job" key={title}>
                  <div className="job-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{dept} • {exp} • Indore</p>
                  </div>
                  <a href="#career-apply">
                    Apply <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section career-apply" id="career-apply">
          <div className="container career-apply-grid">
            <div>
              <span className="mini">WORK WITH US</span>
              <h2>
                Your next opportunity
                <br />
                starts <span>here.</span>
              </h2>
              <p>
                Don’t see the perfect role? Send your resume. We’re always open to talented people who want to build a future with us.
              </p>

              <div className="apply-points">
                <span><CheckCircle2 size={15} /> Growth opportunities</span>
                <span><CheckCircle2 size={15} /> Collaborative team</span>
                <span><CheckCircle2 size={15} /> Learning and development</span>
              </div>
            </div>

            <form className="career-form" onSubmit={handleApply}>
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Email address" required />
              <input type="tel" placeholder="Phone number" required />

              <select required defaultValue="">
                <option value="" disabled>Select position</option>
                {jobs.map(([title]) => (
                  <option key={title}>{title}</option>
                ))}
              </select>

              <select required defaultValue="">
                <option value="" disabled>Experience</option>
                <option>0-1 Years</option>
                <option>1-3 Years</option>
                <option>2-4 Years</option>
                <option>5+ Years</option>
              </select>

              <input type="file" accept=".pdf,.doc,.docx" />
              <textarea rows="4" placeholder="Tell us about yourself..."></textarea>

              <button type="submit">
                Submit application
                <ArrowRight size={17} />
              </button>

              {submitted && (
                <div className="success-message">
                  <CheckCircle2 size={18} />
                  Application submitted successfully.
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="container">
            <div className="section-head">
              <span className="mini">CUSTOMER REVIEWS</span>
              <h2>Trusted by homeowners</h2>
              <p>Real experiences from people who rely on Helpiify for home services.</p>
            </div>

            <div className="review-grid">
              {testimonials.map(({ quote, name, role }) => (
                <article key={name}>
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{quote}”</p>
                  <footer>
                    <span className="avatar">{name.charAt(0)}</span>
                    <div>
                      <b>{name}</b>
                      <small>{role}</small>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div>
              <span className="mini">GET IN TOUCH</span>
              <h2>We’re here to help.</h2>
              <p>
                Need assistance with a booking, service request, or anything else? Our team is ready to help.
              </p>

              <a className="contact-line" href="mailto:hello@helpiify.com">
                <Mail size={17} />
                hello@helpiify.com
              </a>

              <div className="contact-line">
                <MapPin size={17} />
                Indore, Madhya Pradesh
              </div>

              <a className="contact-line" href="tel:+919999999999">
                <Phone size={17} />
                +91 99999 99999
              </a>
            </div>

            <div className="contact-box">
              <h3>Need a professional?</h3>
              <p>Tell us what you need and we’ll connect you with the right expert.</p>
              <a href="#booking" className="green-btn">
                Book a service <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-logo">
              <div className="brand-mark" aria-label="Helpiify logo">
                <span className="mark-light">help</span>
                <span className="mark-accent">iify</span>
              </div>
              <div className="brand-wordmark" aria-label="Helpiify home services">
                <strong>helpiify</strong>
                <small>HOME SERVICES</small>
              </div>
            </div>

            <p>
              Trusted home services connecting you with reliable professionals for every kind of home care need.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#why">About us</a>
            <a href="#careers">Careers</a>
            <a href="#reviews">Reviews</a>
          </div>

          <div>
            <h4>Services</h4>
            <a href="#services">All services</a>
            <a href="#services">Plumbing</a>
            <a href="#services">Cleaning</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@helpiify.com">Email us</a>
            <a href="tel:+919999999999">Call us</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 Helpiify. All rights reserved.
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
