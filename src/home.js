export const setUpPage = (div) => {
  // Header
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  // Header items
  const headerItems = document.createElement("div");
  headerItems.setAttribute("id", "header-items");
  header.appendChild(headerItems);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.setAttribute("id", "homeBtn");
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.setAttribute("id", "menuBtn");
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.setAttribute("id", "contactBtn");

  headerItems.appendChild(homeBtn);
  headerItems.appendChild(menuBtn);
  headerItems.appendChild(contactBtn);

  // Main content
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "main-content");

  // Footer
  const footer = document.createElement("div");
  footer.textContent = "Copyright ndrewta";
  footer.setAttribute("id", "footer");

  // Append divs
  div.appendChild(header);
  div.appendChild(mainContent);
  div.appendChild(footer);
};

export const setContent = () => {
  const contentWrapper = document.getElementById("main-content");
  const element = document.createElement("div");

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
