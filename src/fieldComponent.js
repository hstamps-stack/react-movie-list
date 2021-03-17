import { useState } from "react";

const MovieInputComponent = ({movies,addMovies}) =>{
    const [MovieTitle,setMovieTitle ] = useState('');
    const [MovieGenre,setMovieGenre] = useState('');
    const [MovieYear,setMovieYear ] = useState(0);
    const [MovieImage,setMovieImage ] = useState('');
    const [MovieIbmdLink,setMovieImbd ] = useState('');

    // Handle data once submit is done
    const handleSubmit = (event) =>{
        event.preventDefault();
        // add values from input field to obj
        const movieDetails = {
            id: movies.length + 1,
            title: MovieTitle,
            genre: MovieGenre,
            year: +MovieYear,
            movieImage: MovieImage,
            imdbLink: MovieIbmdLink
        };

        // pass in movie details to function 
            addMovies(movieDetails);
    };
    return (
       <div className ="row mb-5">
           <div className ="col-6 offset-3">
                <form action ="submit" onSubmit = {handleSubmit}>
                    <div className ="form-group">
                        <label htmlFor = "movie-title">Movie Title</label>
                        <input type ="text" 
                         className ="form-control"
                         id="movie-title"
                         value = {MovieTitle}
                         onChange ={(event) =>
                            setMovieTitle(event.target.value)}
                         >
                        </input>
                    </div>
                    <div className ="form-group">
                        <label htmlFor = "movie-genre">Movie Genre</label>
                        <input type ="text" 
                         className ="form-control"
                         id="movie-genre"
                         value = {MovieGenre}
                         onChange ={(event) =>
                            setMovieGenre(event.target.value)}
                         >
                        </input>
                    </div>
                    <div className ="form-group">
                        <label htmlFor = "movie-year">Movie Year</label>
                        <input type ="number" 
                         className ="form-control"
                         id="movie-year"
                         value = {MovieYear}
                         onChange ={(event) =>
                            setMovieYear(event.target.value)}
                         >
                        </input>
                    </div>
                    <div className ="form-group">
                        <label htmlFor = "movie-image">Movie Image Url</label>
                        <input type ="text" 
                         className ="form-control"
                         id="movie-image"
                         value = {MovieImage}
                         onChange ={(event) =>
                            setMovieImage(event.target.value)}
                         >
                        </input>
                    </div>
                    <div className ="form-group">
                        <label htmlFor = "movie-imbd">Movie Imbd</label>
                        <input type ="text" 
                         className ="form-control"
                         id="movie-imbd"
                         value = {MovieIbmdLink}
                         onChange ={(event) =>
                         setMovieImbd(event.target.value)}
                         >
                        </input>
                    </div>
                    <button className="btn btn-primary btn-block">Save</button>
                    <button className='btn btn-outline-danger'>Remove</button>
                </form>
           </div>
       </div>
    )
};


export default MovieInputComponent;