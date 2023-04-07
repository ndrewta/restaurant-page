import "./style.css";
import * as home from "./home";
import * as menu from "./menu";
import * as contact from "./contact";

// cache div
const contentDiv = document.getElementById("content");

// Setup header, content, footer
home.setUpPage(contentDiv);
home.updateContent();

//
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");
homeBtn.addEventListener("click", home.updateContent);
menuBtn.addEventListener("click", menu.updateContent);
contactBtn.addEventListener("click", contact.updateContent);
