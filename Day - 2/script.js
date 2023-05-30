// const button = document.getElementById("search");
// const input = document.getElementById("inputField");
// const textarea = document.getElementById("textareaField");
// const table = document.getElementById("table");

// button.addEventListener("click", () => {
//   const div = document.getElementById("heading");
//   const image = document.createElement("img");
//   image.src =
//     "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg";
//   image.style.width = "100px";
//   image.style.height = "100px";
//   div.append(image);

//   console.log(input.value)
//   textarea.innerText = input.value;

//   const tr = document.createElement("tr");
//   const td1 = document.createElement("td1");
//   const td2 = document.createElement("td2");
//   const td3 = document.createElement("td3");
//   td1.innerText = "4";
//   td2.innerText = "Nibedita";
//   td3.innerText = "Female";
//   tr.append(td1, td2, td3);
//   table.append(tr);
// });

const content = document.getElementById("content");
const showBtn = document.getElementById("showContent");
const hideBtn = document.getElementById("hideContent");

showBtn.addEventListener("click", () => {
  if (content.style.display === "") {
    content.style.display = "block";
  }
});

hideBtn.addEventListener("click", () => {
  if (content.style.display === "block") {
    content.style.display = "";
  }
});