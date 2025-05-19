const getRandomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
  };

export const styleSquare = (element, color) => {
  
  const randomColor = getRandomColor();

  element.style.padding = "100px";
  element.style.width = "100px";
  element.style.height = "100px";

  if (color === "random") {
    element.style.backgroundColor = randomColor;
  } else {
    element.style.backgroundColor = color;
  }
};

export const doubleSize = (element) => {
  if (element.style.padding === "10px") {
    element.style.padding = "20px";
    element.style.width = "20px";
    element.style.height = "20px";
  } else {
    element.style.padding = "10px";
    element.style.width = "10px";
    element.style.height = "10px";
  }
};

export const reset = (element, elementCounter) => {
  element.style.display = "none";
  elementCounter = 0;
};

export const updateCounter = (element, color, newValue) => {
  element.innerHTML = `${color}: ${newValue}.`;
};

let isBodyDark = false;
export const changeTheme = () => {
  if (isBodyDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = 'white';
  }
  isBodyDark = !isBodyDark;
}
