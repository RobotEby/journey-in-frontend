import { useState, useEffect } from "react";
import fetchJoke from "./utils/fetchJoke";

function App() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function getJoke() {
      const jokes = await fetchJoke();
      setJoke(jokes.joke);
    }
    getJoke();
  }, []);

  async function handleClick() {
    const jokes = await fetchJoke();
    setJoke(jokes.joke);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>New joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
