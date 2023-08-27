const Data = [
  {
    name: "Restaurant Menu",
    img: "./assets/8-menu.png",
    link: "./restaurant-menu/index.html",
  },
  {
    name: "Weather App with API",
    img: "./assets/WeatherApp.png",
    link: "./weather%20app%20with%20API/index.html",
  },
  {
    name: "Note taking App",
    img: "./assets/notesTackingApp.png",
    link: "./note-taking-app/index.html",
  },
  {
    name: "Task Manager",
    img: "./assets/TaskManagerApp.png",
    link: "./task-manager-app/index..html",
  },
  {
    name: "Calculator App",
    img: "./assets/CalculatorApp.png",
    link: "./calculators-app/index.html",
  },
  {
    name: "Color Flipper",
    img: "./assets/1-color-flipper.png",
    link: "./color-flipper/index.html",
  },
  {
    name: "Counter",
    img: "./assets/2-counter.png",
    link: "./counter/index.html",
  },
  {
    name: "Review Slider",
    img: "./assets/3-reviews.png",
    link: "./review-slider/index.html",
  },
  {
    name: "Navbar",
    img: "./assets/4-navbar.png",
    link: "./Navbar/index.html",
  },
  {
    name: "Sidebar",
    img: "./assets/5-sidebar.png",
    link: "./Sidebar/index.html",
  },
  {
    name: "Modal",
    img: "./assets/6-modal.png",
    link: "./Modal/index.html",
  },
  {
    name: "Questions",
    img: "./assets/7-questions.png",
    link: "./Questions/index.html",
  },
];

const section = document.querySelector(".section-center");

Data.forEach((item) => {
  const a = document.createElement("a");
  a.href = item.link;
  a.className = "img-link";

  const div = document.createElement("div");
  div.className = "img-container";
  const image = document.createElement("img");
  image.className = "img";
  image.src = item.img;
  image.alt = "image_Alt";
  div.appendChild(image);

  const footer = document.createElement("footer");
  const h5 = document.createElement("h5");
  h5.textContent = item.name;
  footer.appendChild(h5);

  a.appendChild(div);
  a.appendChild(footer);

  section.appendChild(a);
});
