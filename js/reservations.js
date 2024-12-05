document.querySelectorAll(".table-container").forEach((container) => {
  container.addEventListener("click", function () {
    document.querySelectorAll(".table-container").forEach((c) => c.classList.remove("selected"));
    this.classList.add("selected");
    document.getElementById("selectedTable").value = `Table ${this.dataset.table}`;
  });
});

document.getElementById("reservationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedTable = document.getElementById("selectedTable").value;
  if (!selectedTable) {
    alert("Please select a table before submitting.");
    return;
  }
  document.getElementById("successMessage").classList.remove("d-none");
  document.getElementById("reservationForm").reset();
  document.querySelectorAll(".table-container").forEach((c) => c.classList.remove("selected"));
});