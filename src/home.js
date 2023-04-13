import sakeImg from "./sake-home.jpg";

const setContent = (element) => {
  const contentWrapper = element;
  const div = document.createElement("div");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Seki Lounge";
  heading.setAttribute("id", "home-heading");

  // Description
  const text = document.createElement("p");
  text.textContent =
    '"Escape the ordinary and journey underground to our hidden Japanese oasis."';
  text.setAttribute("id", "home-text");

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "home-wrapper");

  // Image
  const img = new Image();
  img.src = sakeImg;

  // Append divs
  wrapper.appendChild(heading);
  wrapper.appendChild(text);
  wrapper.appendChild(img);

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
