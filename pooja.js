function createGridItems(dataArray, containerId) {
  const gridContainer = document.getElementById(containerId);

  dataArray.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.innerHTML = `
          <div class="card-content">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
          </div>
          <div>
            <button class="cart-btn">Add to Cart</button>
          </div>
        `;

    gridContainer.appendChild(gridItem);
  });
}

function createSliderItems(data) {
  const sliderWrapper = document.querySelector(".flex-slider-wrapper");

  data.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("flex-slide");
    slide.innerHTML = `
      <div class="slide-content">
        <img src="${item.src}" alt="${item.alt}">
        <p class="slide-name">${item.alt}</p>
      </div>
    `;
    sliderWrapper.appendChild(slide);
  });
}

function initializeSlider() {
  const flexSliderWrapper = document.querySelector(".flex-slider-wrapper");
  const slides = document.querySelectorAll(".flex-slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  flexSliderWrapper.style.width = `${totalSlides * 200}px`;

  function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    flexSliderWrapper.style.transform = `translateX(-${currentIndex * 200}px)`;
  }

  document.querySelector(".flex-slider-prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  document.querySelector(".flex-slider-next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  showSlide(currentIndex);
}

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    createGridItems(data.ganesh_chaturthi, "ganesh-container");
    createGridItems(data.decorations, "decoration-container");
    createGridItems(data.lamps, "lamps-container");
    createSliderItems(data.carousel_images);
    initializeSlider();
  })
  .catch((error) => console.error("Error fetching data:", error));
