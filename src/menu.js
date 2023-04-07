export const setContent = () => {
  const contentWrapper = document.getElementById("main-content");
  const element = document.createElement("div");

  // Headings
  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Menu";
  mainHeading.setAttribute("id", "menu-heading");

  const foodHeading = document.createElement("h2");
  foodHeading.textContent = "Foods";
  foodHeading.setAttribute("id", "food-heading");

  const drinkHeading = document.createElement("h2");
  drinkHeading.textContent = "Drinks";
  drinkHeading.setAttribute("id", "drink-heading");

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "contact-wrapper");

  wrapper.appendChild(mainHeading);

  element.appendChild(wrapper);
  contentWrapper.appendChild(element);
};
// Remove all child divs then call setContent
export const updateContent = () => {
  const element = document.getElementById("main-content");
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent();
};

// Create a menu layout as follows

//         Menu
// Foods        Drinks
// 1.           1.
// 2.           2.
// 3. etc       3.
