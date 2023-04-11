const setContent = (element) => {
  const contentWrapper = element;
  const div = document.createElement("div");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  heading.setAttribute("id", "contact-heading");

  // Address
  const text = document.createElement("p");
  text.textContent =
    "455 Massachusetts Avenue NW\n Washington,DC 20001\n United States";
  text.setAttribute("id", "contact-text");

  // Append divs
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "contact-wrapper");

  wrapper.appendChild(heading);
  wrapper.appendChild(text);

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
