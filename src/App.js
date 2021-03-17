import MovieInputComponent from './fieldComponent';
import MovieListComponent from "./MovieList.js";
import HeadingComponent from "./Heading";
import { useState } from 'react';

function App() {
  const moviesData = [
    {
      id: 1,
      title: "Training Day",
      genre: "Crime, Drama, Thriller ",
      year: 2001,
      movieImage:
        "https:m.media-amazon.com/images/M/MV5BMDZkMTUxYWEtMDY5NS00ZTA5LTg3MTItNTlkZWE1YWRjYjMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0139654/?ref_=nv_sr_srsg_0",
    },
    {
      id: 2,
      title: "The Mummy",
      genre: "Action, Adventure, Fantasy",
      year: 1999,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BOTJiYjBhZDgtMjhiOC00MTIzLThlNGMtMmI1NjIwM2M3YTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0120616/",
    },
    {
      id: 3,
      title: "Back to the Future",
      genre: "Adventure, Comedy, Sci-Fi",
      year: 1985,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0",
    },
    {
      id: 4,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      year: 2008,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0",
    },
    {
      id: 5,
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      genre: "Action, Adventure, Fantasy",
      year: 2003,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0325980/?ref_=nv_sr_srsg_0",
    },
    {
      id: 6,
      title: "Spider-man",
      genre: "Action, Adventure, Sci-Fi",
      year: 2002,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0145487/?ref_=nv_sr_srsg_8",
    },
    {
      id: 7,
      title: "Transformer",
      genre: "Action, Adventure, Sci-Fi",
      year: 2007,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0418279/?ref_=nv_sr_srsg_3",
    },
    {
      id: 8,
      title: "13 Hours",
      genre: "Action, Drama",
      year: 2016,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BYjY0OWVjMGQtNTIzZi00OGU5LWI4N2EtMGU0YzQ4OWM4ZmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt4172430/?ref_=nv_sr_srsg_0",
    },
    {
      id: 9,
      title: "Rush Hour",
      genre: "Action, Comedy, Crime",
      year: 1998,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt0120812/?ref_=nv_sr_srsg_0",
    },
    {
      id: 10,
      title: "Ride Along",
      genre: "Action, Comedy, Crime",
      year: 2014,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BNjU4NzYzOTY1MF5BMl5BanBnXkFtZTgwMTAyNTc1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imdbLink: "https://www.imdb.com/title/tt1408253/?ref_=nv_sr_srsg_0",
    },
  ];

  const [movies, setMovies] = useState(moviesData);

  // title of webpage 
  const title ='Movie List';

  // add new movie to the list
  const addMovies = (movie) =>{
    // merge new movie with added movies
    setMovies([...movies,movie])
  };
  const rerender = () => {
    setMovies([...movies])
  }
  return (
    <div className="container">
      <HeadingComponent title = {title} />
      <MovieInputComponent movies = {movies} addMovies={addMovies}/>
      <MovieListComponent movies={movies} rerender={rerender} />
    </div>
  );
}
export default App;
