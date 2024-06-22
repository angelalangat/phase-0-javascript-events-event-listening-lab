function addingEventListener() {
    // Select the button element by its id
    const button = document.getElementById('button');

    // Check if the button exists before adding the event listener
    if (button) {
        // Add a click event listener to the button
        button.addEventListener('click', function() {
            alert('Button was clicked!');
        });
    }
}

// Call the function to bind the event listener
addingEventListener();
