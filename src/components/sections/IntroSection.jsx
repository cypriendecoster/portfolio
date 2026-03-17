function IntroSection() {
  return (
    <section className="section intro" id="services">
      <div className="section-heading">
        <p className="section-kicker">A propos</p>
        <h2>Un profil full stack en construction, avec une forte envie de progresser en entreprise.</h2>
      </div>

      <div className="intro-grid">
        <article className="card quote-card">
          <p>
            Je recherche une alternance de 2 ans en conception d'applications
            afin de developper mes competences sur des projets concrets et
            d'evoluer dans un environnement professionnel formateur.
          </p>
        </article>

        <article className="card">
          <h3>Ma demarche</h3>
          <p>
            J'aime concevoir des applications utiles, avec une attention
            portee a la structure du code, a la logique metier, a l'interface
            utilisateur et a la maintenabilite du projet.
          </p>
        </article>

        <article className="card">
          <h3>Ce que je recherche</h3>
          <p>
            Une entreprise ou je pourrai apprendre, monter en competences sur
            le developpement full stack et participer activement a la creation
            et a l'amelioration d'applications.
          </p>
        </article>
      </div>
    </section>
  );
}

export default IntroSection;
