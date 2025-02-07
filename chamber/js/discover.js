document.addEventListener("DOMContentLoaded", () => {
    fetch("./data/discover.json")
        .then(response => response.json())
        .then(data => {
            const section = document.getElementById("membership-cards");
            section.innerHTML = "";
            
            data.forEach(attraction => {
                const card = document.createElement("article");
                card.classList.add("membership-card");

                card.innerHTML = `
                    <h2>${attraction.name}</h2>
                    <figure>
                        <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                    </figure>
                    <address>${attraction.address}</address>
                    <p>${attraction.description}</p>
                    <button><a href="${attraction.link}" target="_blank">Learn More</a></button>
                `;

                section.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading attractions:", error));
});
