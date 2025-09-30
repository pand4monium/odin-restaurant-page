import { loadHome } from "./pages/home";
import { loadMenu } from "./pages/menu";
import { loadAbout } from "./pages/about";

loadAbout();

document.getElementById("home-btn")
        .addEventListener("click", loadHome);

document.getElementById("menu-btn")
        .addEventListener("click", loadMenu);