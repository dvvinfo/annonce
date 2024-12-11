export function initSidebar() {
    const openMenuBtn = document.querySelector(".header-btn");
    const closeMenuBtn = document.querySelector(".sidebar-btn");
    const sidebar = document.querySelector(".sidebar");
  
    if (!openMenuBtn || !closeMenuBtn || !sidebar) return;
  
    const toggleSidebar = (isOpen) => {
      sidebar.classList.toggle("open-sidebar", isOpen);
    };
  
    openMenuBtn.addEventListener("click", () => toggleSidebar(true));
    closeMenuBtn.addEventListener("click", () => toggleSidebar(false));
  
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && !openMenuBtn.contains(event.target)) {
        toggleSidebar(false);
      }
    });
  }