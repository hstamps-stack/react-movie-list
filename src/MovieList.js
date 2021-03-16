const MovieListComponent = ({ movies }) => {
  const getMovieDetails = (movieId) => {
    const foundMovie = movies.find((movie) => movie.id === movieId);
    // check to see if movie in array
    if (!foundMovie) {
      alert("Movie details are not found");
    } else {
      alert(`${foundMovie.title}: ${foundMovie.genre}, ${foundMovie.year}`);
    }
  };
  return (
    <div className="row text-center mx-auto">
      <div className="col">
        <table className="table table-dark">
          <thead className="border border-light">
            <tr>
              <th scope="col">Movie Name</th>
              <th scope="col">Genre</th>
              <th scope="col">Year</th>
              <th scope="col">Movie Cover</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <td className="border border-light">
                    <a
                      href={movie.imdbLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-light"
                    >
                      {movie.title}
                    </a>
                  </td>
                  <td className="border border-light">{movie.genre}</td>
                  <td className="border border-light">{movie.year}</td>
                  <td className="border border-light">
                    <img
                      src={movie.movieImage}
                      className="img-fluid"
                      alt="Movie Cover"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => getMovieDetails(movie.id)}
                    >
                      Click
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieListComponent;
