document.getElementById("timestamp").value = new Date().toISOString();

function openModal(id) {
    document.getElementById("modal-" + id).style.display = "block";
}

function closeModal(id) {
    document.getElementById("modal-" + id).style.display = "none";
}
