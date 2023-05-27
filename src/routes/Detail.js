import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MovieDetail from '../components/MovieDetail';
function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      {
        loading ?
          <h1>Loading...</h1> :
          <MovieDetail
            title={movie.title_long}
            coverImg={movie.large_cover_image}
            desc={movie.description_full}
            genres={movie.genres}
            rating={movie.rating}
            year={movie.year}
          />
      }
    </div>

  )
}

export default Detail;