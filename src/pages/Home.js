
import { useState , useEffect} from "react";
import api from '../services/api'


//  /movie/now_playing?api_key=2dc7925c2af9630e61ec694073a070a0&language=pt-BR&page=1

const Home = () => {

const [filmes , setFilmes] = useState([])

useEffect(() => {

    async function loadFilmes(){

        const response = await api.get("movie/now_playing" , {
            params: {
                api_key : "2dc7925c2af9630e61ec694073a070a0",
                language: "pt-BR",
                page: 1,
            }
        })

        console.log(response)

    }

    loadFilmes()

},[])


    return ( 
        <div>
          


        </div>
     );
}
 
export default Home;