const noButton = document.getElementById('noButton');
const container = document.querySelector('.container');
const excuses = [
    "Are you sure about that?",
    "Think again! Give me a chance!",
    "Oops! Try 'Yes' instead.",
    "This button is broken, click 'Yes'.",
    "Please say 'Yes'!",
    "No way, click YES!",
    "Don't do this to me!"
];
let excuseIndex = 0;

// Function to handle the Yes button click (Success!)
function handleYes() {
    container.innerHTML = '<h1>YES!!! I love you so much! 🎉</h1><p>The answer is "Yes"! I can\'t wait to spend forever with you!</p><div style="font-size: 5em;">💍</div>';
    container.style.backgroundColor = '#dcedc8'; // Lighter green for success
}

// Function to handle the No button click (Final vanishing act)
function handleNo() {
    container.innerHTML = '<h1>Wait, that wasn\'t an option!</h1><p>The only valid answer is "Yes"! Reload the page and try again, please?</p><div style="font-size: 5em;">🥺</div>';
    container.style.backgroundColor = '#ffcdd2'; // Lighter red for 'failure'
}

// Function to make the No button move
function moveNoButton() {
    // 1. Change the text to an excuse
    noButton.textContent = excuses[excuseIndex];
    excuseIndex = (excuseIndex + 1) % excuses.length; // Cycle through excuses

    // 2. Calculate a new random position (within the bounds of the 'buttons' container)
    const buttonContainer = document.querySelector('.buttons');
    const containerRect = buttonContainer.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Generate random coordinates
    // We adjust the boundaries so the button stays fully visible inside the 'buttons' container.
    const newX = Math.random() * (containerRect.width - buttonRect.width); 
    const newY = Math.random() * (containerRect.height - buttonRect.height);

    // Apply the new position
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}