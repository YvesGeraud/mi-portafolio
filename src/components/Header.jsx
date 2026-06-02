// src/components/Header.jsx

function Header() {
  return (
    <header className="header">
      <div className="header-tag">// portafolio</div>
      <h1 className="header-name">Ing. Yves Geraud Mendoza</h1>
      <p className="header-subtitle">
        Tech Lead | Senior Fullstack Developer (Java, Node.js, Angular) | Experto en QA & Performance Testing
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