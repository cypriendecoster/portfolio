import { heroMetrics, heroTags } from "../../data/portfolioData";

function HeroSection() {
  return (
    <header className="hero">
      <nav className="topbar">
        <span className="brand">Decoster Cyprien</span>
        <div className="nav-links">
          <a href="#projets">Projets</a>
          <a href="#competences">Competences</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio developpeur full stack</p>
          <h1>Developpeur full stack en recherche d'une alternance</h1>
          <p className="lede">
            Je concois et developpe des applications web avec une approche a la
            fois technique et orientee utilisateur. Je recherche actuellement
            une alternance de 2 ans en conception d'applications pour
            approfondir mes competences et contribuer a des projets concrets.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projets">
              Voir mes projets
            </a>
            <a className="button button-secondary" href="#contact">
              Me contacter
            </a>
          </div>

          <ul className="hero-metrics">
            {heroMetrics.map((metric, index) => (
              <li key={metric}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">Infos cles</p>
          <h2>Alternance de 2 ans en conception d'applications.</h2>
          <p>
            Je recherche une entreprise ou je pourrai contribuer a des projets
            concrets, renforcer mes competences full stack et progresser sur la
            conception, le developpement et l'amelioration d'applications web.
          </p>
          <div className="panel-tags">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}

export default HeroSection;
