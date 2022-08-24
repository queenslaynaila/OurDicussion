const mainDiv = document.getElementById("item-list");
store.forEach((item) => {
  const imageContent = document.createElement("div");
  imageContent.setAttribute("class", "col");
  mainDiv.appendChild(imageContent);

  const image = document.createElement("img");
  image.setAttribute("src", item.image);
  imageContent.appendChild(image);

  const headingItem = document.createElement("h5");
  headingItem.textContent = item.item;
  imageContent.appendChild(headingItem);

  const description = document.createElement("p");
  description.textContent = item.description;
  imageContent.appendChild(description);

  const inputField = document.createElement("input");
  inputField.setAttribute("placeholder", "type quantity");
  inputField.setAttribute("value", "");
  inputField.setAttribute("type", "number");
  inputField.setAttribute("id", "index");
  imageContent.appendChild(inputField);

  const addButton = document.createElement("button");
  addButton.setAttribute("class", "btn btn-warning btn-sm m-4");
  addButton.textContent = "ADD TO CART";
  imageContent.appendChild(addButton);

  addButton.addEventListener("click", (e) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `You have bought ${inputField.value} ${item.item}`;
    cartSummaryDiv.appendChild(paragraph);
  });
});

const cartSummaryDiv = document.createElement("div");
document.body.appendChild(cartSummaryDiv);

const cartHeading = document.createElement("h5");
cartHeading.textContent = "CARTSUMMARY";
cartSummaryDiv.appendChild(cartHeading);
