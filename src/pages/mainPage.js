import { createMainElement } from "../views/mainView.js";
import { MAIN_URL, USER_INTERFACE_ID } from "../constants.js";
import { randomColorGenerator } from "../../helperFunctions.js";

export const initMainPage = () => {
  const userInterface = document.getElementsByClassName(USER_INTERFACE_ID);
  userInterface.innerHTML = "";
  console.log(userInterface);

  const mainElement = createMainElement();
  mainElement.classList.add("container");
  document.body.appendChild(mainElement);
  console.log(mainElement);
  // ========= show hide select
  const hamburger = document.querySelector(".show-hide-search");
  hamburger.addEventListener("click", () => {
    toggleMenu();
  });
  function toggleMenu() {
    const search = document.querySelector("select");
    search.classList.toggle("hide");
  }

  // select all score divs and eventlistener to them================
  const scoreOverview = document.querySelectorAll(".score-overview");

  for (let i = 0; i < scoreOverview.length; i++) {
    scoreOverview[i].addEventListener("click", () => {
      scoreOverview[i].classList.toggle("expand");
    });
  }

  // random color===================
  const progressBar = document.querySelectorAll(".progress");
  for (let i = 0; i < progressBar.length; i++) {
    const color = `rgba(${randomColorGenerator()},${randomColorGenerator()},${randomColorGenerator()},1)`;
    progressBar[i].style.background = color;
    // progressBar[
    //   i
    // ].style.boxShadow = `1px 1px 2px ${color}, -1px -1px 2px ${color}`;
  }

  //===========================================
  //            Fetching data
  //===========================================

  const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Http error");
    }
    const jsonData = await response.json();
    return jsonData;
  };

  async function populateCitiesMenuAndScores() {
    const citiesData = await fetchData(MAIN_URL);
    const citiesMenu = document.querySelector(".search-city");
    const cityName = document.querySelector(".city-name");

    for (let i = 0; i < citiesData._links["ua:item"].length; i++) {
      const cityNameOption = document.createElement("option");
      cityNameOption.textContent = citiesData._links["ua:item"][i].name;
      cityNameOption.value = citiesData._links["ua:item"][i].href;
      citiesMenu.appendChild(cityNameOption);
    }

    citiesMenu.addEventListener("change", async (e) => {
      const select = document.querySelector("select");
      const scoreContainer = document.querySelector(".city-scores-container");
      scoreContainer.style.display = 'grid'
      select.classList.toggle("hide");
      const selectedCityUrl = e.target.value;
      const selectedCity = citiesMenu.options[citiesMenu.selectedIndex];
      const scoreUrl = `${selectedCityUrl}scores/`;
      const cityImageUrl = `${selectedCityUrl}images/`;
      const detailsUrl = `${selectedCityUrl}details/`;
      cityName.textContent = selectedCity.textContent;
      await getAndDisplayScore(scoreUrl, detailsUrl);
      const getCityImage = await fetchData(cityImageUrl);
      const cityImage = document.querySelector(".city-image");
      cityImage.style.backgroundImage = `url(${getCityImage.photos[0].image.web}`;
    });
  }

  // const getScore = async (MAIN_URL) => {
  //   const scores = await fetchData(`${MAIN_URL}scores`);

  //   const scoreOverview = document.querySelectorAll(".score-overview");

  //   for (let i = 0; i < scoreOverview.length; i++) {
  //     scoreOverview[i].addEventListener("click", () => {
  //       scoreOverview[i].classList.toggle("expand");
  //     });
  //   }
  // };

  const getAndDisplayScore = async (scoreUrl, detailsUrl) => {
    const scores = await fetchData(scoreUrl);
    const details = await fetchData(detailsUrl);

    const scoreDetails = document.querySelectorAll(".details");
    scoreDetails.forEach((element) => {
      element.innerHTML = "";
    });

    const cityDescription = document.querySelector(".city-description");
    const progress = document.querySelectorAll(".progress");
    const catigories = document.querySelectorAll(".category-name");
    const scoreNumber = document.querySelectorAll(".category-score");

    cityDescription.innerHTML = scores.summary;

    const createElements = (i, j, k, valueName) => {
      let detailParagraph = document.createElement("p");
      let value = document.createElement("p");
      scoreDetails[i].appendChild(detailParagraph);
      scoreDetails[i].appendChild(value);
      detailParagraph.textContent = details.categories[j].data[k].label;
      value.textContent = valueName;
    };

    for (let i = 0; i < scores.categories.length; i++) {
      const scoreName = scores.categories[i].name;
      catigories[i].textContent = scores.categories[i].name;
      progress[i].style.width = `${scores.categories[i].score_out_of_10 * 10}%`;
      scoreNumber[i].textContent = `${scores.categories[
        i
      ].score_out_of_10.toFixed(1)}/10`;

      for (let j = 0; j < details.categories.length; j++) {
        if (scoreName === details.categories[j].label) {
          for (let k = 0; k < details.categories[j].data.length; k++) {
            if ("currency_dollar_value" in details.categories[j].data[k]) {
              createElements(
                i,
                j,
                k,
                `${details.categories[j].data[k].currency_dollar_value} $`
              );
            } else if ("float_value" in details.categories[j].data[k]) {
              createElements(
                i,
                j,
                k,
                details.categories[j].data[k].float_value
              );
            } else if ("int_value" in details.categories[j].data[k]) {
              createElements(i, j, k, details.categories[j].data[k].int_value);
            } else if ("percent_value" in details.categories[j].data[k]) {
              createElements(
                i,
                j,
                k,
                `${details.categories[j].data[k].percent_value} %`
              );
            } else if ("string_value" in details.categories[j].data[k]) {
              createElements(
                i,
                j,
                k,
                details.categories[j].data[k].string_value
              );
            } else {
              console.log(details.categories[j].data[k]);
            }
          }
        }
      }
    }
  };

  const main = async () => {
    console.log('asd')
    await populateCitiesMenuAndScores();
  };
  main();
};
