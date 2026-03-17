import { capabilities, learningNow } from "../../data/portfolioData";

function CapabilitiesSection() {
  return (
    <section className="section capabilities" id="competences">
      <div className="split-layout">
        <div className="section-heading">
          <p className="section-kicker">Competences</p>
          <h2>Ma stack actuel et les technologies que j'utilise en projet.</h2>
        </div>

        <div className="card list-card">
          <div className="capability-groups">
            {capabilities.map((group) => (
              <div className="capability-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="learning-line">
            <strong>En apprentissage :</strong> {learningNow.join(" / ")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
