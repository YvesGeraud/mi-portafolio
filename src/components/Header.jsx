// src/components/Header.jsx

function Header() {
  return (
    <header className="header">
      <div className="header-tag">// portafolio</div>
      <h1 className="header-name">Ing. Yves Geraud Mendoza</h1>
      <p className="header-subtitle">
        Senior Full Stack Developer con liderazgo técnico
      </p>
      <p className="header-subtitle">Java · Node.js · Angular · Arquitectura · Seguridad · Performance</p>
      
      <p className="header-about">
        Ingeniero de Software Full Stack Senior con más de 10 años de experiencia en desarrollo,
        modernización de sistemas institucionales y mejora de arquitectura de software. He impulsado propuestas técnicas
        para migrar sistemas legados hacia soluciones modernas con Angular, Node.js, Prisma, GraphQL y Java/Spring Boot,
        fortaleciendo la seguridad, el rendimiento y la mantenibilidad mediante arquitectura por capas, validación con Zod,
        manejo seguro de sesión con cookies HttpOnly y pruebas de rendimiento con JMeter.
      </p>

      <div className="header-links">
        <a href="https://github.com/YvesGeraud" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:yvesgeraud98@gmail.com">
          Contacto
        </a>
      </div>
    </header>
  )
}

export default Header