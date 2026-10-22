export default function Languages({ languages }) {
  return (
    <ul className="languages" aria-label="Idiomas">
      {languages.map(({ code, name }) => (
        <li key={code}>
          <img
            src={`https://flagcdn.com/w40/${code}.png`}
            alt=""
            width="20"
            height="20"
            className="languages__flag"
          />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  )
}
