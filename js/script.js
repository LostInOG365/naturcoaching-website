/* ============================================================
   Naturcoaching – script.js
   ============================================================ */

// Elemente einmalig cachen
const sidebar = document.getElementById('sidebar');

// ---- Sidebar ----
function toggleSidebar() {
    sidebar.classList.toggle('show');
}

// Sidebar schließen bei Klick außerhalb – einmalig registriert!
document.addEventListener('click', function (event) {
    const isInsideSidebar  = sidebar.contains(event.target);
    const isToggleButton   = event.target.closest('.mobile-toggle');

    if (!isInsideSidebar && !isToggleButton && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    }
});

// ---- Dropdown ----
function toggleDropdown(event) {
    event.preventDefault();

    const toggle   = event.currentTarget;
    const dropdown = document.getElementById('coaching-dropdown');

    toggle.classList.toggle('open');
    dropdown.classList.toggle('show');
}

// ---- Aktiven Nav-Link markieren ----
document.querySelectorAll('.nav-menu a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        // Nur interne Anker-Links abfangen
        if (!this.getAttribute('href').startsWith('#')) return;

        e.preventDefault();
        document.querySelectorAll('.nav-menu a').forEach(function (l) {
            l.classList.remove('active');
        });
        this.classList.add('active');
    });
});