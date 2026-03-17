function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-card">
        <p className="section-kicker">Contact</p>
        <h2>Ajoute ici ton email, ton GitHub et ton LinkedIn.</h2>
        <p>
          Exemple de bloc final: une phrase courte, tes liens, et une
          invitation claire a discuter d'un projet, d'une alternance ou d'une
          mission freelance.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:hello@example.com">
            hello@example.com
          </a>
          <a className="button button-secondary" href="https://github.com/">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
