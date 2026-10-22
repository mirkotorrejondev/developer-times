import SkillIcon from './SkillIcon'

export default function Skills({ skills }) {
  return (
    <div className="skills">
      {skills.map(({ title, items }) => (
        <section key={title} className="skills__col" aria-labelledby={`skills-${title}`}>
          <h3 id={`skills-${title}`}>{title}</h3>
          <ul>
            {items.map(({ name, icon }) => (
              <li key={icon}>
                <SkillIcon icon={icon} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}