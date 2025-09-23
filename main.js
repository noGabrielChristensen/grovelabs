document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  document.querySelectorAll(".sidebar-icon[data-link]").forEach(icon => {
    icon.addEventListener("click", () => {
      window.location.href = icon.dataset.link;
    });
  });
});
