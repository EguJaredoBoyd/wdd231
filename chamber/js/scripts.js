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

function updateFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", () => {
  loadMembers();
  updateFooter();
});
