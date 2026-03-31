import { processSteps } from "../../data/portfolioData";

function ProcessSection() {
  return (
    <section className="section process">
      <div className="section-heading">
        <p className="section-kicker">Parcours du site</p>
        <h2>Une presentation directe de mon profil, de mes competences et de mes projets.</h2>
      </div>

      <div className="timeline">
        {processSteps.map((step, index) => (
          <article className="timeline-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
