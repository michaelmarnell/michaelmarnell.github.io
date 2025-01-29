// Show the selected tab's content
document.getElementById("venue-content").style.display = "block";
document.getElementById("rsvp-content").style.display = "none";
document.getElementById("about-content").style.display = "none";



// JavaScript to handle tab switching functionality
document.getElementById("venue-tab").addEventListener("click", function() {
showTab("venue-content");
});
document.getElementById("rsvp-tab").addEventListener("click", function() {
showTab("rsvp-content");
});
document.getElementById("about-tab").addEventListener("click", function() {
showTab("about-content");
});

function showTab(tabId) {
// Hide all content sections
const contentSections = document.querySelectorAll(".content");
contentSections.forEach(function(section) {
    section.style.display = "none";
});

// Show the selected tab's content
document.getElementById(tabId).style.display = "block";
}