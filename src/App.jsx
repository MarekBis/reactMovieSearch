import { useEffect,useState } from "react";
import './App.css'
import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com?apikey=4b4173df";

const App=()=>{

  const [movies,setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState("");


  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}}`)
    const data = await response.json();
    console.log(data)
    setMovies(data.Search)
  }
  
  useEffect(() => {
    searchMovies(searchTerm)
  }, [searchTerm])
  
  return (
    <div className="app">
      <h1>Movie Search</h1>
      <div className="search">

        <input type="text" name="search" onChange={(e)=> setSearchTerm(e.target.value) }
         placeholder="Search for movies..."value={searchTerm} />
      </div>
      {
        movies?.length>0 ? (
          <div className="container">
            {movies.map((movie,index)=>{
              return <MovieCard key={index} movie={movie}/>
            })}
            {/* <MovieCard movie={movie1}/> */}
          </div>
        ):
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  )
}

export default App
