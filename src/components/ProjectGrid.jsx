// src/components/ProjectGrid.jsx
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function ProjectGrid() {
  return (
    <section className="grid-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ProjectGrid