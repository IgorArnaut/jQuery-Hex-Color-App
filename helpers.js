import $ from "jquery";

const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const color = $("#color");
const body = $("body");

function getHexColor() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    hex += char;
  }

  return hex;
}

function changeColor() {
  const hex = getHexColor();
  body.css({ "background-color": hex });
  color.text(hex);
}

export { changeColor };
