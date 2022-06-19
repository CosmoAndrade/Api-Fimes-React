import { useState, useEffect } from "react";
import api from '../services/api'



const Filme = () => {


    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        async function loadFilmes() {

            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "2dc7925c2af9630e61ec694073a070a0",
                    language: "pt-BR",
                    page: 1,
                }
            })

            // console.log(response.data.results.slice(0,10))
            setFilmes(response.data.results.slice(0, 15))


        }

        loadFilmes()

    }, [])


    return (
        <div className= " mt-4">
            
            

            {filmes.map((filme) => {
                return (

                    <div className="card" key={filme.id}>
                        <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} class="card-img-top" />

                        <div className="card-body  " >

                            <h5 class="card-title bg-primary text-center text-white rounded  p-4" >{filme.title}</h5>

                            <p className="card-text">

                                {filme.overview}

                            </p>


                        </div>

                    </div>

                )
            })}

        </div>
    );
}
 
export default Filme;