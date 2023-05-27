function MovieDetail({ title, coverImg, desc, genres, rating, year }) {
  return (
    <div>
      <h1>{title}</h1>
      <div><img alt={title} src={coverImg} /></div>
      <p>description : {desc}</p>
      <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
      <p>rating : {rating}</p>
      <p>year : {year}</p>
    </div>
  )
}

export default MovieDetail;