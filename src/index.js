import "./style.css";
import * as home from "./home";

// cache div
const contentDiv = document.getElementById("content");

// Setup header, content, footer
home.setUpPage(contentDiv);
home.updateContent();
