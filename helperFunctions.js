import { MAIN_URL } from "./src/constants.js";

export const randomColorGenerator = () => {
  const randNum = Math.floor(Math.random() * 255);
  return randNum;
};

export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("HTTP error");
  }
  const jsonData = await response.json();
  return jsonData;
};

export const populateCitiesMenuAndScores = async () => {
  const errors = document.querySelector(".error-message");
  try {
    const citiesData = await fetchData(MAIN_URL);
    const citiesMenu = document.querySelector(".search-city");
    const cityName = document.querySelector(".city-name");

    // ======== pupulate select element with cities and cities URLs
    for (let i = 0; i < citiesData._links["ua:item"].length; i++) {
      const cityNameOption = document.createElement("option");
      cityNameOption.textContent = citiesData._links["ua:item"][i].name;
      cityNameOption.value = citiesData._links["ua:item"][i].href;
      citiesMenu.appendChild(cityNameOption);
    }

    //============ when change city, display its data
    citiesMenu.addEventListener("change", async (e) => {
      const select = document.querySelector("select");
      document.querySelector(".city-scores-container").style.display = "grid";
      document.querySelector(".section-title").style.display = "inherit";
      select.classList.toggle("hide");
      const selectedCityUrl = e.target.value;
      const selectedCity = citiesMenu.options[citiesMenu.selectedIndex];
      const scoreUrl = `${selectedCityUrl}scores/`;
      const cityImageUrl = `${selectedCityUrl}images/`;
      const detailsUrl = `${selectedCityUrl}details/`;
      cityName.textContent = selectedCity.textContent;

      //=========== get city scores
      await getAndDisplayScore(scoreUrl, detailsUrl);

      //=========== get city image
      const getCityImage = await fetchData(cityImageUrl);
      const cityImage = document.querySelector(".city-image");
      cityImage.style.backgroundImage = `url(${getCityImage.photos[0].image.web}`;
    });
  } catch (error) {
    errors.textContent = error;
    errors.style.display = "block";
  }
};

export const getAndDisplayScore = async (scoreUrl, detailsUrl) => {
  const errors = document.querySelector(".error-message");
  try {
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
  } catch (error) {
    errors.textContent = error;
    errors.style.display = "block";
  }
};
