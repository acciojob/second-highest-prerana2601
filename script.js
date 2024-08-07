//your JS code here. If required.
// script.js
function findSecondHighest() {
    // Get user input
    const arrayInput = document.getElementById('arrayInput').value;
    const resultElement = document.getElementById('result');
    
    // Validate input
    if (!arrayInput.trim()) {
        resultElement.textContent = "Please enter a valid array.";
        return;
    }
    
    // Convert input string to an array of numbers
    const arr = arrayInput.split(',').map(num => parseFloat(num.trim()));
    
    // Handle edge cases
    if (arr.length < 2) {
        resultElement.textContent = -Infinity;
        return;
    }
    
    // Use a Set to filter unique elements
    const uniqueElements = new Set(arr);
    
    // Convert Set to an array and sort it in descending order
    const sortedUniqueElements = Array.from(uniqueElements).sort((a, b) => b - a);
    
    // Handle case with less than two distinct elements
    if (sortedUniqueElements.length < 2) {
        resultElement.textContent = -Infinity;
    } else {
        // Output the second-highest element
        resultElement.textContent = sortedUniqueElements[1];
    }
}
