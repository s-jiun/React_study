import Movie from "../components/Movie";
import {useState, useEffect} from "react";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const loadMovie = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    return (
        <div>
            <h1>Movie Archive</h1>
            {loading ? 
            <div className="spinner-border m-5" role="status"><span className="visually-hidden">Loading...</span></div> :
            (
                <div>
                    {movies.map((movie) => (
                        <Movie 
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres} />
                    ))}
                </div>
            )
        }
        </div>
    )
}