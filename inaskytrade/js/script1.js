document.getElementById('menu-toggle').addEventListener('click', function () {
    const toggle = this;
    const navList = document.getElementById('nav-list');

    // Tambahkan kelas 'active' untuk animasi hamburger
    toggle.classList.toggle('active');

    // Tambahkan kelas 'show' untuk menu
    navList.classList.toggle('show');
});