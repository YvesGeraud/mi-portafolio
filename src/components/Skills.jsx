// src/components/Skills.jsx
function Skills() {
  const skillsData = [
    {
      title: "Arquitectura",
      desc: "Capas, servicios, DTOs, validaciones, transacciones."
    },
    {
      title: "Backend",
      desc: "Node.js, Express, Symfony, Spring Boot, APIs REST/GraphQL."
    },
    {
      title: "Frontend",
      desc: "Angular, componentes, formularios, guards, consumo de APIs, manejo de estado."
    },
    {
      title: "Calidad y seguridad",
      desc: "Zod, cookies HttpOnly, JWT, JMeter, control de errores."
    }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Enfoque Técnico</h2>
      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-title">{item.title}</h3>
            <p className="skill-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
