
// Script for showing the random fragment on the web page.

// Define a global variable to keep track of the fragments that have already been displayed
let displayedFragments = [];

// Create a function to display a random fragment
function showRandomFragment() {
  // Check if there are any more fragments that haven't been displayed yet
  if (displayedFragments.length < fragmentsArray.length) {
    // Get a reference to the container element where the fragments will be displayed
    const container = document.getElementById("fragments-container");

    // Clear the container element
    container.innerHTML = "";

    // Choose a random fragment that hasn't been displayed yet
    let randomFragment = fragmentsArray[Math.floor(Math.random() * fragmentsArray.length)];
    while (displayedFragments.includes(randomFragment)) {
      randomFragment = fragmentsArray[Math.floor(Math.random() * fragmentsArray.length)];
    }

    // Add the random fragment to the list of displayed fragments
    displayedFragments.push(randomFragment);

    // Create a new paragraph element to hold the random fragment
    const p = document.createElement("p");

    // Set the text content of the paragraph element to the random fragment
    p.textContent = randomFragment;

    // Append the paragraph element to the container
    container.appendChild(p);
  }
}