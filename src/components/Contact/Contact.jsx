import "./Contact.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <ScrollReveal>
          <div className="contact__content">
            <p className="contact__eyebrow">Contact</p>

            <h2 className="contact__title">
              Let's build something together.
            </h2>

            <p className="contact__description">
              I'm currently looking for opportunities to contribute to
              a development team and continue growing as a software developer.
            </p>

            <a
              href="mailto:james.m.topmiller@gmail.com"
              className="contact__email"
            >
              james.m.topmiller@gmail.com →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;