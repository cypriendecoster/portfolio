function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-card">
        <p className="section-kicker">Contact</p>
        <h2>Discutons de votre projet ou d'une opportunite d'alternance.</h2>
        <p>
          Je suis base a Tourcoing et actuellement a la recherche d'une
          alternance en developpement web. Vous pouvez me contacter par email,
          telephone ou retrouver mon profil sur GitHub et LinkedIn.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="mailto:cyprien59551@gmail.com"
          >
            cyprien59551@gmail.com
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/cypriendecoster"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button button-secondary"
            href="https://www.linkedin.com/in/cyprien-decoster-314301166/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p>Telephone : 07 50 24 89 17</p>
      </div>
    </section>
  );
}

export default ContactSection;
