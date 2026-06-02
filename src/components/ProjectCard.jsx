// src/components/ProjectCard.jsx
function ProjectCard({ title, description, tags, image, github, githubFront, githubBack, live, codeGraph, index }) {
  return (
    <div
      className="card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        <div className="card-tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Agrupamos los enlaces en un contenedor flex */}
        <div className="card-links" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '15px' }}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="card-link">
              GitHub →
            </a>
          )}
          {githubFront && (
            <a href={githubFront} target="_blank" rel="noreferrer" className="card-link">
              Front →
            </a>
          )}
          {githubBack && (
            <a href={githubBack} target="_blank" rel="noreferrer" className="card-link">
              Back →
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="card-link">
              Live →
            </a>
          )}
        </div>

        {/* Enlace especial para el CodeGraph */}
        {codeGraph && (
          <div style={{ marginTop: '10px' }}>
            <a href={codeGraph} target="_blank" rel="noreferrer" className="card-link special-link" style={{ display: 'inline-block', fontWeight: 'bold', color: '#00d2ff' }}>
              🔍 Explorar arquitectura (CodeGraph)
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard