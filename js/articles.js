document.addEventListener("DOMContentLoaded", () => {
    const articles = {
        1: "Assistive technology has made significant progress in recent years, offering new tools and resources for the visually impaired to navigate their environments independently...",
        2: "Inclusive education aims to provide all students, regardless of disability, an equal opportunity to learn and grow in traditional educational settings...",
        3: "Finding stable and fulfilling employment remains a hurdle for many people with disabilities. Despite policies promoting workplace equality, barriers such as limited accessibility and lack of awareness persist...",
        4: "Artificial intelligence is transforming accessibility, offering powerful tools that support independence for people with disabilities...",
        5: "People with disabilities are often at higher risk of mental health challenges due to societal barriers, isolation, and physical limitations..."
    };

    const modal = document.getElementById("articleModal");
    const articleText = document.getElementById("articleText");

    // Event listeners for each tile
    document.querySelectorAll(".tile").forEach(tile => {
        tile.addEventListener("mouseenter", (event) => {
            const articleId = event.currentTarget.getAttribute("data-article");
            articleText.innerText = articles[articleId];
            modal.style.display = "flex";  // Show the modal
        });

        tile.addEventListener("mouseleave", () => {
            modal.style.display = "none";  // Hide the modal
        });
    });
});
