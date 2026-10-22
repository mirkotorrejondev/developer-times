export default function SkillIcon({ icon }) {
  return (
    <img
      className="skill-icon"
      src={`https://skillicons.dev/icons?i=${icon}`}
      alt=""
    />
  )
}