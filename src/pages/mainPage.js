import { createMainElement } from "../views/mainView.js";
import { createScoreElement } from "../views/scoreView.js";
import { USER_INTERFACE_CLASS } from "../constants.js";
import {
  randomColorGenerator,
  populateCitiesMenuAndScores,
} from "../../helperFunctions.js";

export const initMainPage = () => {
  const userInterface = document.getElementsByClassName(USER_INTERFACE_CLASS);
  userInterface.innerHTML = "";

  const mainElement = createMainElement();
  mainElement.classList.add("container");
  document.body.appendChild(mainElement);

  

  const errors = document.querySelector(".error-message");

  // ========= show hide city select
  const hamburger = document.querySelector(".show-hide-search");
  hamburger.addEventListener("click", () => {
    showHideSelect();
  });
  function showHideSelect() {
    const search = document.querySelector("select");
    search.classList.toggle("hide");
  }

  // select all score divs and add eventlistener to them ================
  const scoreOverview = document.querySelectorAll(".score-overview");

  for (let i = 0; i < scoreOverview.length; i++) {
    scoreOverview[i].addEventListener("click", () => {
      scoreOverview[i].classList.toggle("expand");
    });
  }

  // random color for score bars ===================
  const progressBar = document.querySelectorAll(".progress");
  for (let i = 0; i < progressBar.length; i++) {
    const color = `rgba(${randomColorGenerator()},${randomColorGenerator()},${randomColorGenerator()},1)`;
    progressBar[i].style.background = color;
  }

  //===========================================
  //            Fetching data
  //===========================================

  const main = async () => {
    try {
      await populateCitiesMenuAndScores();
    } catch (error) {
      errors.textContent = error;
      errors.style.display = "block";
    }
  };
  main();
};
