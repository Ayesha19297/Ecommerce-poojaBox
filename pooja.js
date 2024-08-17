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

// Fetch and populate data for each category
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    createGridItems(data.ganesh_chaturthi, "ganesh-container");
    createGridItems(data.decorations, "decoration-container");
    createGridItems(data.lamps, "lamps-container");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
