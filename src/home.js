export const setUpPage = (div) => {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const headerItems = document.createElement("div");
  headerItems.setAttribute("id", "header-items");
  header.appendChild(headerItems);

  const homeTab = document.createElement("p");
  homeTab.textContent = "Home";
  const menuTab = document.createElement("p");
  menuTab.textContent = "Menu";
  const contactTab = document.createElement("p");
  contactTab.textContent = "Contact";

  headerItems.appendChild(homeTab);
  headerItems.appendChild(menuTab);
  headerItems.appendChild(contactTab);

  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "main-content");

  const footer = document.createElement("div");
  footer.textContent = "Copyright ndrewta";
  footer.setAttribute("id", "footer");

  div.appendChild(header);
  div.appendChild(mainContent);
  div.appendChild(footer);
};

export const setContent = () => {
  const contentWrapper = document.getElementById("main-content");
  const element = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Seki Lounge";
  title.setAttribute("id", "home-title");

  const text = document.createElement("p");
  text.textContent = "The finest meals and bespoke service as it should be.";
  text.setAttribute("id", "home-text");

  const textWrapper = document.createElement("div");
  textWrapper.setAttribute("id", "text-wrapper");

  textWrapper.appendChild(title);
  textWrapper.appendChild(text);

  element.appendChild(textWrapper);
  contentWrapper.appendChild(element);
};

export const updateContent = () => {
  const element = document.getElementById("main-content");
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent();
};
