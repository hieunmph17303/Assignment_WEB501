import Navigo from "navigo";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
});

router.resolve();