const setContent = (element) => {
  const contentWrapper = element;
  const div = document.createElement("div");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Seki Lounge";
  heading.setAttribute("id", "home-heading");

  // Description
  const text = document.createElement("p");
  text.textContent = "The finest meals and bespoke service as it should be.";
  text.setAttribute("id", "home-text");

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "home-wrapper");

  // Append divs
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
