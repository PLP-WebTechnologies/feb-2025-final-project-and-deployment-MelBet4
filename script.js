document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            alert("Thank you for contacting me! I’ll get back to you soon 😊");

            form.reset();
        });
    }
});

function searchPosts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".blog-card");

    cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = title.includes(input) ? "block" : "none";
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("darkModeBtn");
    btn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
}