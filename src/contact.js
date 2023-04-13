import mapImg from "./map.jpg";

const setContent = (element) => {
  const contentWrapper = element;
  const div = document.createElement("div");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Find us here";
  heading.setAttribute("id", "contact-heading");

  // Address
  const text = document.createElement("p");
  text.textContent =
    "We are a 9 minute walk from Tokyo station.\n\n〒107-0062\n東京都港区南青山3-5-12\nB1F";
  text.setAttribute("id", "contact-text");

  // Map
  const map = new Image();
  map.src = mapImg;

  // Append divs
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "contact-wrapper");

  wrapper.appendChild(heading);
  wrapper.appendChild(text);
  wrapper.appendChild(map);

  div.appendChild(wrapper);
  contentWrapper.appendChild(div);
};
export default function updateContent(div) {
  // Remove all child divs then call setContent
  const element = div;
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent(element);
}
