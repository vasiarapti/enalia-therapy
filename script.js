document.querySelectorAll('.submenu > a').forEach((menuLink) => {
  menuLink.addEventListener('click', function () {
    const submenu = this.nextElementSibling; // Get the associated submenu
    const allSubmenus = document.querySelectorAll('.submenu > .collapse'); // All submenus
    
    allSubmenus.forEach((submenuItem) => {
      // Collapse all submenus except the one that was clicked
      if (submenuItem !== submenu) {
        new bootstrap.Collapse(submenuItem, { toggle: false }).hide();
      }
    });

    // Toggle the clicked submenu (expand if collapsed, collapse if expanded)
    const collapse = new bootstrap.Collapse(submenu, { toggle: true });
  });
});