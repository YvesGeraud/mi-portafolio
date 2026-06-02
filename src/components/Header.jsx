// src/components/Header.jsx

function Header() {
  return (
    <header className="header">
      <div className="header-tag">// portafolio</div>
      <h1 className="header-name">Yves Geraud</h1>
      <p className="header-subtitle">
        Desarrollador · Estructuras de datos · Algoritmos
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