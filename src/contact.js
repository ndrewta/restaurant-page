export const setContent = () => {
  const contentWrapper = document.getElementById("main-content");
  const element = document.createElement("div");

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

  element.appendChild(wrapper);
  contentWrapper.appendChild(element);
};

export const updateContent = () => {
  // Remove all child divs then call setContent
  const element = document.getElementById("main-content");
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent();
};
