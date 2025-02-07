document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visit-message");

    // Get the last visit timestamp from localStorage
    let lastVisit = localStorage.getItem("lastVisit");
    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        let lastVisitDate = new Date(parseInt(lastVisit));
        let currentDate = new Date();
        let timeDiff = currentDate - lastVisitDate;
        let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysDiff} ${daysDiff === 1 ? "day" : "days"} ago.`;
        }
    }

    // Update the message
    visitMessage.textContent = message;

    // Save the current date as last visit
    localStorage.setItem("lastVisit", Date.now());
});
