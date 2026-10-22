export default function Profile({ name, role, quote, photo, photoCaption, bio }) {
  return (
    <section className="profile" aria-labelledby="profile-name">
      <figure className="profile__figure">
        <img className="profile__photo" src={photo} alt={`Retrato de ${name}`} />
        <figcaption>{photoCaption}</figcaption>
      </figure>

      <h2 id="profile-name" className="profile__name">
        {name}, {role}
      </h2>
      <blockquote className="profile__quote">“{quote}”</blockquote>

      <div className="profile__bio">
        <div>
          <p className="profile__byline">BY {name.toUpperCase()}</p>
          <p>{bio[0]}</p>
        </div>
        <div>
          <p>{bio[1]}</p>
        </div>
      </div>
    </section>
  )
}
