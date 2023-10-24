export const createScoreElement = () => {
    const element = document.createElement("div");
    element.innerHTML = String.raw`
          
            <div class="main-score-data">
              <div class="category-heading">
                <p class="category-name">Environmental Quality</p>
              </div>
              <div class="category-overview">
                <div class="bar">
                  <div class="progress"></div>
                </div>
                <p class="category-score">5/10</p>
              </div>
            </div>
            <div class="details"></div>
          
    `;
    return element;
  };
  