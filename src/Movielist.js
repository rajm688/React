import { Movie } from "./App";

export function Movielist({ movies , setmovielist}) {
  return (
    <div>
      {movies.map(({ name, poster, rating, summary },index) => ( //map can take second argument represents index value
        <Movie 
        deletebutton={<button onClick={()=>{
                                            const deleteindex = index;
                                            const remainingmovies = movies.filter((mv, idx)=>deleteindex !== idx); // same as above we are passing index as second value and comparing index value with deleteindex
                                            setmovielist(remainingmovies)}
                                      }>Delete</button>} 
                                      name={name} poster={poster} rating={rating} summary={summary} />
      ))}
    </div>
  );
}
