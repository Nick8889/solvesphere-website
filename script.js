let initialContent = document.getElementById('main-content').innerHTML;
document.getElementById('get-answers').addEventListener('click', function() {
    console.log("Button was clicked"); // This should show in the console when you click the button
    document.getElementById('main-content').innerHTML = `
        <header class="site-header">
            <div class="container header-container">
            </div>
        </header>
        <section id="packages" class="packages">
           <section id="packages" class="packages">
        <h2>Choose Your Package</h2>
        <div class="package" id="basic-package">
            <h3>Basic Package</h3>
            <p>Designed for students who need help with math questions and are looking for a super budget-friendly option in a short amount of time.</p>
            <ul>
                <li>Access to ask up to less than 5 math questions per user.</li>
                <li>Support: Response ASAP.</li>
                <li>Price: $0.50 per question below 5 questions in queue for user.</li>
            </ul>
        </div>
        <div class="package" id="standard-package">
            <h3>Standard Package</h3>
            <p>Aimed at students who require more assistance with math homework and need more questions answered in a short amount of time.</p>
            <ul>
                <li>Access to ask up to 5-9 math questions per user.</li>
                <li>Support: Response ASAP.</li>
                <li>Price: $5 total for more than 5 but less than 9 questions in queue for user.</li>
            </ul>
        </div>
        <div class="package" id="premium-package">
            <h3>Premium Package</h3>
            <p>Perfect for students seeking comprehensive support, and need a lot of math questions to be answered in a short amount of time.</p>
            <ul>
                <li>Access to ask up to 20 or more math questions per user.</li>
                <li>Support: Response ASAP.</li>
                <li>Price: $10 total for 10 questions or $11 total for 11 question or 20 questions OR more in queue for user.</li>
            </ul>
        </div>
        </section>
    `;
});

document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default action of the link
    document.getElementById('main-content').innerHTML = initialContent;
});
