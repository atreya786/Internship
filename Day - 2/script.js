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

const arr = [
  {
    title: "Chicken Biryani",
    description: "About Chicken Biryani Recipe: The easiest and quickest Biryani recipe, that you can cook in about 40 min.",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
  },
  {
    title: "Mutton Biryani",
    description: "About Chicken Biryani Recipe: The easiest and quickest Biryani recipe, that you can cook in about 40 min.",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
  },
  {
    title: "Prawn Biryani",
    description: "About Chicken Biryani Recipe: The easiest and quickest Biryani recipe, that you can cook in about 40 min.",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
  }
]
const div = document.createElement("div")
div.className = "secret1"
arr.map((item)=>{
  const h1 = document.createElement("h1")
  const p = document.createElement("p")
  const image = document.createElement("img")
  const hr = document.createElement("hr")
  const btn = document.createElement("button")
  btn.className = "myButton"
  btn.innerText = "Add to Order Menu"
  btn.addEventListener("click", ()=>{
    alert(`Want to order ${item.title} ?`)
  })

  h1.innerText = item.title
  p.innerText = item.description
  image.src = item.image
  div.append(h1, p, image,btn,hr)
  content.append(div)
})

