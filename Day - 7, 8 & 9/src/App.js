import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Page from "./components/Page";

function App() {
  const [arr, setArr] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [page, setPage] = useState(1);
  const [wholeArr, setWholeArr] = useState([]);
  // const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [pageData, setPageData] = useState([]);

  const pageArr = [];
  let i = 1;
  while (i <= wholeArr.length / 10) {
    pageArr.push(i);
    i++;
  }

  const newData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setWholeArr(data);
        const end = page * 10;
        const start = page - 1;
        const newData = data.slice(start * 10, end);
        setPageData(newData);
      });
  };

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };
  // console.log(searchStr);

  const handlePage = (el) => {
    setPage(el);
  };

  const getPageData = async () => {
    await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPageData(data.data);
      });
  };

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
    // getData();
    // getPageData();
    newData();
  }, [page]);

  return (
    <div className="App">
      {/* <input
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
      </div> */}
      {pageData.length > 0 ? (
        <>
          <h1 style={{ fontSize: "3rem" }}>Showing results...</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
            }}
          >
            {pageData.map((el) => {
              return (
                <>
                  <Page
                    // name={el.name}
                    // image={el.image}
                    // country={el.airline[0].country}
                    // trips={el.trips}

                    userId={el.userId}
                    title={el.title}
                    body={el.body}
                  />
                </>
              );
            })}
          </div>
        </>
      ) : (
        <h1>No results found</h1>
      )}
      {pageArr.map((el) => {
        return <button onClick={() => handlePage(el)}>{el}</button>;
      })}
    </div>
  );
}

export default App;
