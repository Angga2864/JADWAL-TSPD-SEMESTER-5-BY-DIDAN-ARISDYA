document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".schedule-table td");

  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.style.transform = "scale(1.1)";
    });
    cell.addEventListener("mouseleave", () => {
      cell.style.transform = "scale(1)";
    });
  });
});
