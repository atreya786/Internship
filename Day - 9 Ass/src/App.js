import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const [wholeArr, setWholeArr] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [form, setForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    main_protagonist: "",
    production_house: "",
    rating: "",
    episodes: "",
    short_description: "",
    image: "",
  });
  const [editFormData, setEditFormData] = useState({
    name: "",
    main_protagonist: "",
    production_house: "",
    rating: "",
    episodes: "",
    short_description: "",
    image: "",
  });

  const element = 9;
  const pageArr = [];
  let i = 1;
  while (i <= wholeArr.length / element + 1) {
    pageArr.push(i);
    i++;
  }

  const getData = async () => {
    await fetch("http://localhost:5000/animes", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setWholeArr(data);
        const end = page * element;
        const start = page - 1;
        const newData = data.slice(start * element, end);
        setAnimes(newData);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/animes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setForm(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSearch = async () => {
    await fetch("http://localhost:5000/animes", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const filteredResults = data.filter((item) =>
          item.name.toLowerCase().includes(searchStr.toLowerCase())
        );
        // console.log(filteredResults)
        setAnimes(filteredResults);
      });
  };

  const handleDelete = (data) => {
    fetch(`http://localhost:5000/animes/${data.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>;
          getData();
          console.log("deleted");
        } else {
          console.error("Failed to delete item");
        }
      })
      .catch((error) => {
        console.error("Error occurred while deleting item", error);
      });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setForm(true);
  };

  const handleEdit = async (data) => {
    setEditFormData({
      name: data.name,
      main_protagonist: data.main_protagonist,
      production_house: data.production_house,
      rating: data.rating,
      episodes: data.episodes,
      short_description: data.short_description,
      image: data.image,
    });
    console.log(editFormData);
    setEditForm(true);

    // await fetch(`http://localhost:5000/animes/${data.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(editFormData),
    // })
    //   .then((data) => {
    //     console.log("Success:", data);
    //     console.log(editFormData);
    //     getData();
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePage = (el) => {
    setPage(el);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg sticky-top bg-warning border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Animes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setSearchStr(e.target.value)}
                value={searchStr}
                className="form-control me-2 bg-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-dark me-2"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                className="btn btn-outline-dark"
                type="submit"
                onClick={handleAdd}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </nav>

      {editForm && (
        <div className="add-form">
          <form>
            <div className="form-group d-flex">
              {" "}
              <label>Anime Name :</label>
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Main Protagonist :</label>
              <input
                type="text"
                name="main_protagonist"
                value={editFormData.main_protagonist}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Production House :</label>
              <input
                type="text"
                name="production_house"
                value={editFormData.production_house}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Rating :</label>
              <input
                type="text"
                name="rating"
                value={editFormData.rating}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Episodes :</label>
              <input
                type="text"
                name="episodes"
                value={editFormData.episodes}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Description :</label>
              <input
                type="text"
                name="short_description"
                value={editFormData.short_description}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Image URL :</label>
              <input
                type="text"
                name="image"
                value={editFormData.image}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleEdit}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {form && (
        <div className="add-form">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group d-flex">
              {" "}
              <label>Anime Name :</label>{" "}
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Main Protagonist :</label>
              <input
                type="text"
                name="main_protagonist"
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Production House :</label>
              <input
                type="text"
                name="production_house"
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Rating :</label>
              <input
                type="text"
                name="rating"
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Episodes :</label>
              <input
                type="text"
                name="episodes"
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Description :</label>
              <input
                type="text"
                name="short_description"
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group d-flex">
              <label>Image URL :</label>
              <input
                type="text"
                name="image"
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}

      <div className="body">
        {animes.map((data) => {
          return (
            <Card
              data={data}
              key={data.id}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          );
        })}
      </div>

      <footer>
        {pageArr.map((el) => {
          return (
            <button
              className="btn btn-warning m-5 me-1 ms-1"
              onClick={() => handlePage(el)}
            >
              {el}
            </button>
          );
        })}
      </footer>
    </div>
  );
}

export default App;
