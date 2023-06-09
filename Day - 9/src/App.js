import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [arr, setArr] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };
  // console.log(searchStr);

  const getData = async () => {
    await fetch("http://localhost:5000/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setArr(data);
      });
  };

  const handleSearch = async () => {
    await fetch(`http://www.omdbapi.com/?s=${searchStr}&apikey=86613943`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setArr(data.Search);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        value={searchStr}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSearch}>search</button>
      <div
        className="cards"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {arr.map((el) => {
          return <Card Poster={el.Poster} Title={el.Title} />;
        })}
      </div>
    </div>
  );
}

export default App;
