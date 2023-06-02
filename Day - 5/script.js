const addAnime = document.getElementById("addAnime");
const showBox = document.getElementById("anime");

// --------- Show ---------

const show = () => {
  fetch("http://localhost:5000/myData", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      data.map((el) => {
        const div1 = document.createElement("div");
        showBox.className = "gridBox";
        div1.className = "div1";
        const image = document.createElement("img");
        image.src = el.image;
        const title = document.createElement("h2");
        title.innerText = el.title;
        const description = document.createElement("p");
        description.innerText = el.description;
        const btn1 = document.createElement("button");
        const btn2 = document.createElement("button");
        const br = document.createElement("br");
        btn1.innerText = "Edit";
        btn1.className = "myButton";
        btn2.innerText = "Delete";
        btn2.className = "myButton";

        // --------- Edit ---------

        btn1.addEventListener("click", () => {
          alert(`Want to edit ${el.title} ?`);
          const updatedTitle = prompt("Enter new title");
          fetch(`http://localhost:5000/myData/${el.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: updatedTitle,
              description: el.description,
              image: el.image,
            }),
          })
            .then((res) => {
              alert("Updated Title Successfully");
            })
            .catch((err) => {
              alert("Error occured while updating" + err);
            });
        });

        // -------- Delete --------

        btn2.addEventListener("click", () => {
          alert(`Want to delete ${el.title} ?`);
          fetch(`http://localhost:5000/myData/${el.id}`, {
            method: "DELETE",
          })
            .then((res) => {
              alert("Deleted the item");
            })
            .catch((err) => {
              alert("Error occured while deleting");
            });
        });

        div1.append(image, title, description, br, btn1, btn2);
        showBox.append(div1);
      });
    });
};
show();

// --------- Add ---------

addAnime.addEventListener("click", () => {
  const addTitle = document.createElement("h2");
  const addImage = document.createElement("img");
  const addDesc = document.createElement("p");
  addTitle.innerText = prompt("Enter title");
  addImage.src = prompt("Enter image");
  addDesc.innerText = prompt("Enter description");
  fetch("http://localhost:5000/myData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: addTitle.innerText,
      image: addImage.src,
      description: addDesc.innerText,
    }),
  }).then((res) => {
    if (res.ok) {
      console.log(res);
      alert("Anime added successfully");
    } else {
      alert("Error");
    }
  });
  show();
});
