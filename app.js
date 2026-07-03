const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const results = aircraft.filter(a =>
    a.name.toLowerCase().includes(query) ||
    a.manufacturer.toLowerCase().includes(query) ||
    a.type.toLowerCase().includes(query)
  );

  resultsDiv.innerHTML = results.map(a => `
    <div class="result">
      <h3>${a.name}</h3>
      <p><b>Manufacturer:</b> ${a.manufacturer}</p>
      <p><b>Type:</b> ${a.type}</p>
      <p><b>First Flight:</b> ${a.first_flight}</p>
    </div>
  `).join("");
});
