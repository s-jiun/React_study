import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const[loading, setLoading] = useState(true);

    const getMovieDetail = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setLoading(false);
    }

    useEffect(getMovieDetail, []);

    return(
        <div>
            <h1>Detail</h1>
        </div>
    )
}

export default Detail;