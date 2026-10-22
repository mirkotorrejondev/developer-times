export default function ProjectCard({ period, title, description, image, tags }) {
  return (
    <article className="project">
      <div className="project__head">
        <span className="project__period">{period}</span>
        {image ? (
          <img className="project__image" src={image} alt={`Captura del proyecto ${title}`} />
        ) : (
          <div className="project__image project__image--empty" aria-hidden="true" />
        )}
      </div>
      <div className="project__body">
        <h3 className="project__title">{title}</h3>
        <p>{description}</p>
        <ul className="project__tags" aria-label="Tecnologías">
          {tags.map(({ name, icon }) => (
            <li key={icon}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
