document.addEventListener("DOMContentLoaded", () => {
    const visitMessage = document.getElementById("visit-message");

    let lastVisit = localStorage.getItem("lastVisit");
    let message = "";

    if (!lastVisit) {
        message = "Welcome! This is your first visit.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const today = new Date();
        const timeDiff = today - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff === 0) {
            message = "Welcome back! You visited today.";
        } else if (daysDiff === 1) {
            message = "Welcome back! Your last visit was yesterday.";
        } else {
            message = `Welcome back! Your last visit was ${daysDiff} days ago.`;
        }
    }

    visitMessage.textContent = message;
    localStorage.setItem("lastVisit", new Date().toISOString());
});
