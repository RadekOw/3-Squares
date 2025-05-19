import { styleSquare, doubleSize } from "./helpers/functions.js";

export const createBlueSquare = () => {
  const blueSquare = document.getElementById("div_blue");

  styleSquare(blueSquare, "blue");

  // @ts-ignore
  blueSquare.addEventListener("click", () => {
    doubleSize(blueSquare);
  });

  // @ts-ignore
  if (blueSquare.style.display === "block") {
    // @ts-ignore
    blueSquare.style.display = "none";
  } else {
    // @ts-ignore
    blueSquare.style.display = "block";
  }
};
