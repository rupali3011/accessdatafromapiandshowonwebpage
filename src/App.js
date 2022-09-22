import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [movie, setmovie] = useState("");
  async function Getdata() {
    const url1 = `https://gist.githubusercontent.com/robynitp/3ee8f3708d86dcde2e61/raw/2959019f1ea3a423899963c09cf9fb56e70834aa/movie.json`;
    const res1 = await fetch(url1);
    const data = await res1.json();
    const title = data.Title;
    const actors = data.Actors;
    const obj = {
      title,
      actors
    };
    setmovie(obj);
  }
  useEffect(() => {
    Getdata();
  }, []);
  return (
    <div className="App">
      <h3> using get method Access data from api</h3>
      <h2> {movie.title}</h2>
      <h4>{movie.actors}</h4>
    </div>
  );
}
