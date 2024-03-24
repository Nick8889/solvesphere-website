document.getElementById('get-answers').addEventListener('click', function() {
    document.getElementById('main-content').innerHTML = `
        <header class="site-header">
            <div class="container header-container">
                <img src="logo.png" alt="SolveSphere Logo" class="logo">
                <nav class="site-nav">
                    <a href="index.html" class="nav-link">Home</a>
                </nav>
            </div>
        </header>
        <section id="packages" class="packages">
            <!-- Packages content here, same as previous response -->
        </section>
    `;
});
