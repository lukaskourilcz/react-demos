import { useState } from "react";

function App() {

 const [movies, setMovies] = useState([
    {id: 1, title: 'Spider Man', ratings: 3},
    {id: 2, title: 'Spider Man 2', ratings: 6}
  ])

const handleClick = () => {
  setMovies(movies.map(m => m.id === 1 ? {...movies, title: "John Wick"} : m))
}

  return (
    <section>

      {movies.map(m => (
        <li key={Math.random()}>{m.title}</li>
      ))}
      <button onClick={handleClick}>Change Movie</button>
    </section>
  );
}

export default App;
