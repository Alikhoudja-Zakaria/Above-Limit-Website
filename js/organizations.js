let visibleRows = 2;

document.addEventListener('DOMContentLoaded', () => {
    // Initially show all tiles
    filterTiles('all');
});

function filterTiles(category) {
    const tiles = document.querySelectorAll('.tile');
    const buttons = document.querySelectorAll('.filter-buttons button'); // Get all filter buttons
    visibleRows = 2; // Reset visible rows to 2
    document.getElementById("seeMoreBtn").style.display = 'block'; // Show the "See More" button

    // Remove active class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Set active class on the selected button
    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === category) {
            button.classList.add('active'); // Add active class to the selected button
        }
    });

    // Hide all tiles initially
    tiles.forEach(tile => {
        tile.classList.remove('show'); // Remove the show class from all tiles
        tile.style.display = 'none'; // Hide all tiles
    });

    // Show tiles for the selected category
    tiles.forEach(tile => {
        if (category === 'all' || tile.classList.contains(category)) {
            tile.style.display = 'flex'; // First set display to flex
            tile.classList.add('show'); // Add show class for relevant tiles
        }
    });

    setTimeout(showRows, 100); // Delay showing rows to allow for fade-in effect
}

function showRows() {
    const visibleTiles = Array.from(document.querySelectorAll('.tile.show'));
    visibleTiles.forEach((tile, index) => {
        tile.style.display = index < visibleRows * 2 ? 'flex' : 'none'; // Show up to the number of visible rows
        // Add fade-in effect for visible tiles
        tile.style.opacity = index < visibleRows * 2 ? '1' : '0'; // Set opacity
        tile.style.transition = 'opacity 0.5s ease'; // Transition effect
    });

    // Hide the "See More" button if all tiles are visible
    if (visibleRows * 2 >= visibleTiles.length) {
        document.getElementById("seeMoreBtn").style.display = 'none';
    }
}

function seeMore() {
    visibleRows += 2; // Increase the number of visible rows by 2
    showRows(); // Call showRows to update the display
    scrollToEnd(); // Scroll to the end of the tiles section
}

function scrollToEnd() {
    const tilesSection = document.querySelector('.tiles-section'); // Get the tiles section
    tilesSection.scrollIntoView({ behavior: 'smooth', block: 'end' }); // Scroll to the end of the section
}

console.log("Organizations page loaded");



function toggleService(tile) {
    tile.classList.toggle('expanded');
}
