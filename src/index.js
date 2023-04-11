import "./style.css";
import pageSetup from "./pagesetup";
import updateHome from "./home";
import updateMenu from "./menu";
import updateContact from "./contact";

// Setup header, content, footer
const content = document.getElementById("content");
pageSetup(content);
const mainContent = document.getElementById("main-content");
updateHome(mainContent);

//
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");
homeBtn.addEventListener("click", () => updateHome(mainContent));
menuBtn.addEventListener("click", () => updateMenu(mainContent));
contactBtn.addEventListener("click", () => updateContact(mainContent));
