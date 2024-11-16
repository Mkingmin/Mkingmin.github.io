const button = document.getElementById("toggleButton");
const content = document.getElementById("hidden");
const elementHTML =

`<figure class="featured-image">
<img src="images/projects/personalized_tutorial_executive_summary.png" alt="Executive Summary">
</figure>`;

// add a function and event listener to button variable
if (button && content) {
button.addEventListener("click", () => {
    if (content.innerHTML.trim() === "") {
        content.innerHTML = elementHTML; // add the target content

        // show content by removing the 'hidden' class
        content.classList.remove("hidden");
    } else {
        content.innerHTML = ""; // hide the content
        }

})} else {

console.error("Could not find button or content element");

}
