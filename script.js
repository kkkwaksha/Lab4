/*ЗАВДАННЯ 1*/
const targetIndex = 9;

function createToggleClickHandler(element) {
  let firstClick = true;

  return function () {
    if (firstClick) {
      element.classList.toggle("color-toggle");
      firstClick = false;
    } else {
      element.classList.toggle("new-color");
    }
  };
}

const firstElement = document.getElementById(`element${targetIndex}`);
firstElement.addEventListener("click", createToggleClickHandler(firstElement));

const secondElement = firstElement.nextElementSibling;
secondElement.addEventListener(
  "click",
  createToggleClickHandler(secondElement)
);

/*ЗАВДАННЯ 2*/

function addImage() {
  const imgContainer = document.querySelector("a");
  let newImage = document.getElementById("poznanImage");

  // Чи вже є зображення
  if (!newImage) {
    newImage = document.createElement("img");
    newImage.id = "poznanImage";
    newImage.src = "./poznan.png";
    newImage.alt = "Познань";
    newImage.width = 700;
    imgContainer.appendChild(newImage);
  }
}

function increaseImage() {
  const img = document.getElementById("poznanImage");
  if (img && img.width < 1000) {
    img.width += 50;
  }
}

function decreaseImage() {
  const img = document.getElementById("poznanImage");
  if (img && img.width > 50) {
    img.width -= 50;
  }
}

function deleteImage() {
  const img = document.getElementById("poznanImage");
  if (img) {
    img.remove();
  }
}
