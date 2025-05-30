import { styleSquare, doubleSize } from "./helpers/functions.js";

export const createPaletteSquare = (color) => {
  console.log(color);
  const paletteSquare = document.getElementById('div_palette');

  styleSquare(paletteSquare, color);

  paletteSquare?.addEventListener('click', () => {
    doubleSize(paletteSquare);
  })
  if (paletteSquare?.style.display === "block") {
    // @ts-ignore
    paletteSquare.style.display = "none";
  } else {
    // @ts-ignore
    paletteSquare.style.display = "block";
  }
}