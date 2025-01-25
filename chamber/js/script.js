
async function loadMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();
    const container = document.getElementById("member-container");
    container.innerHTML = "";
  
    members.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        container.appendChild(card);
    });
  }
  
  function toggleView(view) {
    const container = document.getElementById("member-container");
    if (view === "grid") {
        container.classList.remove("list-view");
    } else if (view === "list") {
        container.classList.add("list-view");
    }
  }
  
  function updateFooter() {
    const yearSpan = document.getElementById("year");
    const modifiedSpan = document.getElementById("last-modified");
    yearSpan.textContent = new Date().getFullYear();
    modifiedSpan.textContent = document.lastModified;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadMembers();
    updateFooter();
  });