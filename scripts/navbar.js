document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbar-container");

    if (navbarContainer) {
        // Determine correct path for links based on current location
        const basePath = window.location.pathname.includes("/pages/") ? ".." : ".";

        navbarContainer.innerHTML = `
            <nav class="navbar">
                <ul class="nav-links">
                    <li><a href="${basePath}/index.html">Home</a></li>
                    <li><a href="${basePath}/pages/puzzles.html">Puzzles</a></li>
                    <li><a href="${basePath}/pages/updates.html">Updates</a></li>
                </ul>
            </nav>
        `;
    }
});

