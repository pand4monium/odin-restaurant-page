import { loadHome } from "./pages/home";
import { loadMenu } from "./pages/menu";

loadHome();

document.getElementById("home-btn")
        .addEventListener("click", loadHome);

document.getElementById("menu-btn")
        .addEventListener("click", loadMenu);