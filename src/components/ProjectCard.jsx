// src/components/ProjectCard.jsx
function ProjectCard({ title, description, tags, image, github, index }) {
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

        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="card-link">
            Ver en GitHub →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard