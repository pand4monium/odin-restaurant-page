import { loadHome } from "./pages/home";
import { loadMenu } from "./pages/menu";

loadMenu();

document.getElementById("home-btn")
        .addEventListener("click", loadHome);