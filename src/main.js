import "./style.css";
import imgUrl from "./bg.jpg";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>Super Town</h1>
  </div>
`;

document.getElementsByClassName(
  "container"
)[0].style.background = `url(${imgUrl}) center/cover`;
