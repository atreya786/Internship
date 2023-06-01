const data = [
  {
    image: "https://wallpapercave.com/uwp/uwp906397.jpeg",
    title: "My Hero Academia",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image:
      "https://i.pinimg.com/736x/4a/c7/f0/4ac7f08b36eaad458cc0c280cdb9d1bf.jpg",
    title: "Solo Leveling",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image:
      "https://bestideadiy.com/wp-content/uploads/2023/05/desktop-wallpaper-aesthetic-anime-pfp-luffy-luffy-pfp.jpg",
    title: "One Piece",
    description: "This is a perfect anime wallpaper for your desktop.",
    // link: "https://sanji.to/one-piece-100?ref=search"
  },
  {
    image:
      "https://w0.peakpx.com/wallpaper/349/96/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-michikatsu-tsugikuni-yoriichi-tsugikuni.jpg",
    title: "Demon Slayer",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image:
      "https://bestideadiy.com/wp-content/uploads/2023/05/NSC-header-mobile-300x300.jpg",
    title: "Naruto",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image: "https://wallpapercave.com/uwp/uwp1281813.jpeg",
    title: "Attack On Titan",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image: "https://wallpapercave.com/uwp/uwp1710378.jpeg",
    title: "Darling In The Franxx",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image: "https://images6.alphacoders.com/130/1301165.jpg",
    title: "Jujutsu Kaisen",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image: "https://wallpapercave.com/uwp/uwp955124.jpeg",
    title: "Assasination Classroom",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image: "https://wallpapercave.com/uwp/uwp3453936.jpeg",
    title: "Dragon Ball",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image: "https://wallpapercave.com/uwp/uwp2302427.jpeg",
    title: "Bunny Girl Senpai",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image:
      "https://e0.pxfuel.com/wallpapers/451/687/desktop-wallpaper-megumin-waifu-anime-konosuba-thumbnail.jpg",
    title: "Kono Suba",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image:
      "https://cutewallpaper.org/26/around-me-anime-wallpaper/771317034.jpg",
    title: "Don't Toy With Me Miss Nagatoro",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image:
      "https://w0.peakpx.com/wallpaper/324/210/HD-wallpaper-power-xaons-waifu-denki-waifus-chainsaw-man-anime-makima-thumbnail.jpg",
    title: "Chainsaw Man",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
  {
    image:
      "https://i.pinimg.com/736x/a6/1f/46/a61f4650c5beb4cc80aa31a867a729e1.jpg",
    title: "Kaguya Sama",
    description: "This is a perfect anime wallpaper for your desktop.",
  },
];


const showBox = document.getElementById("anime");
const render = () => {
  data.map((el) => {
    const div1 = document.createElement("div");
    //   showBox.className = "flexBox";
    showBox.className = "gridBox";
    div1.className = "div1";
    const image = document.createElement("img");
    image.src = el.image;
    const title = document.createElement("h2");
    title.innerText = el.title;
    const description = document.createElement("p");
    description.innerText = el.description;
    const btn = document.createElement("button");
    const br = document.createElement("br");
    btn.innerText = "Watch";
    btn.className = "myButton";
    btn.addEventListener("click", () => {
      alert(`Want to watch ${el.title} ?`);
      window.location.href = "https://sanji.to/one-piece-100?ref=search";
    });
    div1.append(image, title, description, br, btn);
    showBox.append(div1);
  });
};
render()

const div2 = document.createElement("div");
div2.className = "gridBox";
for (let i = 0; i < data.length; i++) {
  const image = document.createElement("img");
  image.src = data[i].image;
  const title = document.createElement("h2");
  title.innerText = data[i].title;
  const description = document.createElement("p");
  description.innerText = data[i].description;
  div2.append(title, description, image);
  //   showBox.append(div2);
}

const show = document.getElementById("show");
show.addEventListener("click", () => {
  console.log("clicked");
  if (anime.style.display === "") {
    anime.style.display = "grid";
    show.innerText = "Hide Anime";
  } else {
    anime.style.display = "";
    show.innerText = "Show Anime";
  }
});

const addBtn = document.getElementById("addAnime");
addBtn.addEventListener("click", () => {
  const newData = {
    title: prompt("Give anime name"),
    image: prompt("Give anime image link"),
    description: prompt("Give anime description"),
  };
  data.push(newData);
  render();
});