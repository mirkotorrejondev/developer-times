import { formatEdition } from "../utils/format";

export default function Masthead({ date = new Date(), edition = 1, city = 'Cochabamba' }) {
  return (
    <header className="masthead">
      <h1 className="masthead__title">The Developer Times</h1>
      <div className="masthead__bar">
        <span>No {edition}</span>
        <span>© {date.getUTCFullYear()} The Dev Times Company</span>
        <span>
          {city.toUpperCase()}, {formatEdition(date)}
        </span>
      </div>
    </header>
  )
}