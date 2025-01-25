async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Member data not found");

    const members = await response.json();


    const filteredMembers = members.slice(-3);

    const container = document.getElementById("member-container");
    container.innerHTML = "";

    if (filteredMembers.length === 0) {
      container.innerHTML = "<p>No members to display.</p>";
      return;
    }

    filteredMembers.forEach(member => {
      const card = document.createElement("div");
      card.className = "member-card";
      card.innerHTML = `
        <img src="${member.logo || 'images/placeholder-logo.png'}" 
             alt="${member.name}" 
             onerror="this.src='images/placeholder-logo.png';">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading members:", error);
    document.getElementById("member-container").innerHTML = `<p>Unable to load member data.</p>`;
  }
}

async function loadWeather() {
  const apiKey = "504d565dc0a32788d6cf04fdab807406"; 
  const city = "New York"; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Weather data not found");

    const weatherData = await response.json();

    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
      <p>City: ${city}</p>
      <p>Temperature: ${weatherData.main.temp}°C</p>
      <p>Condition: ${weatherData.weather[0].description}</p>
    `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-info").innerHTML = `<p>Unable to fetch weather data.</p>`;
  }
}

function updateFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", () => {
  loadMembers();
  loadWeather();
  updateFooter();
});
