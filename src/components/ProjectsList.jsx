import ProjectCard from './ProjectCard'

export default function ProjectsList({ projects }) {
  return (
    <aside className="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="projects__title">
        Projects
      </h2>

      {projects.map(({ id, ...project }) => (
        <ProjectCard key={id} {...project} />
      ))}
    </aside>
  )
}
