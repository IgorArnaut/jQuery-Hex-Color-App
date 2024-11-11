import $ from "jquery";
import { changeColor } from "./helpers.js";

$(window).on("load", () => {
  changeColor();
  $("#btn").on("click", () => changeColor());
});
