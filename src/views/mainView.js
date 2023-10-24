export const createMainElement = () => {
  const element = document.createElement("div");
  element.innerHTML = String.raw`
      <div class="error-message"></div>
      <div class="show-hide-search mobile">
        <div class="hamburger first"></div>
        <div class="hamburger second"></div>
        <div class="hamburger third"></div>
      </div>

      <div class="icon">
        
      </div>

      <div class="ribbon"></div>
      <div class="ribbon2"></div>
      <div class="ribbon3"></div>
      <div class="ribbon4"></div>
      <div class="ribbon5"></div>
      
      

      <div class="main-container">
        <div class="intro">
          <p class="intro-heading">PLACES TO LIVE</p>
          <h1>
            KNOW YOUR FUTURE<br />
            HOME
          </h1>
          <p>
            This appliction privide information about <br />
            cities from around the world, it get the <br />data 
            from <a href="https://developers.teleport.org/"><i>"Teleport"</a></i> API
          </p>
          <select class="search-city"></select>
        </div>
        <div class="city-image-container">
          <div class="city-image"></div>
        </div>
      </div>
      <div class="city-info">
        <div class="city-summary-container">
          <p class="city-name">New York</p>
          <p class="city-description">
          New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.
          </p>
        </div>
      </div>

      <!-- ------ Score -------------->
      <h1 class="section-title">Scores</h1>
      <div class="city-scores-container">
       
        <!-- socre elements -->
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        <div class="score-overview">
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
        </div>
        
      </div>
  `;
  return element;
};
