import { loadHome } from "./pages/home";
import { loadMenu } from "./pages/menu";
import { loadAbout } from "./pages/about";
import "./styles/styles.css";

loadHome();

document.getElementById("home-btn")
        .addEventListener("click", loadHome);

document.getElementById("menu-btn")
        .addEventListener("click", loadMenu);

document.getElementById("about-btn")
        .addEventListener("click", loadAbout);