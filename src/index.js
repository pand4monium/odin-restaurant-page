import { loadHome } from "./pages/home";

loadHome();

document.getElementById("home-btn")
        .addEventListener("click", loadHome);