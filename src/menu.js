import ramenImg from "./ramen.jpg";
import tacoImg from "./taco.jpg";
import nigiriImg from "./nigiri.jpg";
import curryImg from "./curry.jpg";
import sakeImg from "./sake.jpg";
import martiniImg from "./martini.jpg";
import sangriaImg from "./sangria.jpg";
import gimletImg from "./gimlet.jpg";

const foodOne = {
  name: "Ramen Rebellion",
  description:
    "A hearty bowl of tradition ramen noodles in a savory broth,\n" +
    "topped with tender slices of chashu pork, bamboo shoots, scallions and a perfectly soft boiled egg.",
  price: "$12.50",
  icon: ramenImg,
};
const foodTwo = {
  name: "Tokyo Tacos",
  description:
    "A fusion of Japanese and Mexican cuisine, featuring crispy tempura shrimp, avocado, pickled daikon and carrot,\n" +
    "and a drizzle of spicy mayo in a warm tortilla. Served with a side of wasabi-infused salsa.",
  price: "$10.00",
  icon: tacoImg,
};
const foodThree = {
  name: "Ninja Nigiri",
  description:
    "A selection of bite-sized sushi featuring fresh salmon, tuna, yellowtail, and eel.\n" +
    "Each piece is expertly hand-pressed and garnished with a dab of wasabi and a touch of soy sauce.",
  price: "$14.00",
  icon: nigiriImg,
};
const foodFour = {
  name: "Katsu Curry",
  description:
    "Tender breaded chicken cutlet served on a bed of steaming Japanese rice with a side of creamy curry sauce." +
    "Topped with crispy fried onions and a sprinkle of fresh parsley.",
  price: "$16.50",
  icon: curryImg,
};
const drinkOne = {
  name: "Samurai Sake",
  description:
    "A premium sake served chilled in a traditional ceramic cup. Rich and fragrant with a smooth finish.",
  price: "$8.00",
  icon: sakeImg,
};
const drinkTwo = {
  name: "Matcha Martini",
  description:
    "A decadent blend of premium vodka, green tea liqueur, and pure matcha powder.\n" +
    "Served up with a dusting of matcha and a delicate lemon twist.",
  price: "$12.00",
  icon: martiniImg,
};
const drinkThree = {
  name: "Shogun Sangria",
  description:
    "A refreshing twist on the classic Spanish drink, featuring red wine, citrus fruits, and a splash of Japanese yuzu juice.\n" +
    "Served over ice with a slice of fresh orange.",
  price: "$9.00",
  icon: sangriaImg,
};

const drinkFour = {
  name: "Geisha Gimlet",
  description:
    "A classic gin gimlet with a Japanese twist.\n" +
    "Made with premium gin, fresh lime juice, and a splash of sweet and sour yuzu syrup. Served up with a beautiful edible flower garnish.",
  price: "$11.00",
  icon: gimletImg,
};

const foodsList = [foodOne, foodTwo, foodThree, foodFour];
const drinksList = [drinkOne, drinkTwo, drinkThree, drinkFour];

const createListItem = (item) => {
  const listElem = document.createElement("li");
  const itemWrapper = document.createElement("div");
  itemWrapper.setAttribute("class", "item-divide");

  const contentDiv = document.createElement("div");

  const name = document.createElement("h3");
  name.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  const price = document.createElement("p");
  price.textContent = item.price;

  const icon = new Image();
  icon.src = item.icon;

  contentDiv.appendChild(name);
  contentDiv.appendChild(description);
  contentDiv.appendChild(price);

  itemWrapper.appendChild(contentDiv);
  itemWrapper.appendChild(icon);
  listElem.appendChild(itemWrapper);

  return listElem;
};

const createList = (array, text) => {
  const list = document.createElement("ul");
  const heading = document.createElement("h2");
  heading.textContent = text;
  list.appendChild(heading);

  array.forEach((element) => {
    const item = createListItem(element);
    list.appendChild(item);
  });
  return list;
};

const setContent = (element) => {
  const contentWrapper = element;
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "menu-wrapper");

  // Headings
  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  heading.setAttribute("id", "menu-heading");

  // Foods list
  const fList = createList(foodsList, "Foods");
  const dList = createList(drinksList, "Drinks");

  // Append list and heading
  wrapper.appendChild(heading);
  wrapper.appendChild(fList);
  wrapper.appendChild(dList);
  contentWrapper.appendChild(wrapper);
};
export default function updateContent(div) {
  // Remove all child divs then call setContent
  const element = div;
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent(element);
}
