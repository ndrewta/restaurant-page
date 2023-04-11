export default function setUpPage(element) {
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
  element.appendChild(header);
  element.appendChild(mainContent);
  element.appendChild(footer);
}
