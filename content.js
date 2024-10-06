(function () {
    try {
        // Check if the pop-up already exists to avoid redeclaration errors
        if (document.getElementById('prompt-popup')) {
            console.log('Pop-up already exists, not creating a new one.');
            return;
        }

        // Create a prompt selection pop-up
        const popupDiv = document.createElement('div');
        popupDiv.id = 'prompt-popup';
        popupDiv.style.position = 'fixed';
        popupDiv.style.top = '10px'; // More space from the top for better visibility
        popupDiv.style.right = '20px'; // More space from the right for better visibility
        popupDiv.style.backgroundColor = '#ffffff'; // White background for simplicity
        popupDiv.style.borderRadius = '10px'; // Rounded corners for a modern look
        popupDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Soft shadow for depth
        popupDiv.style.padding = '10px'; // Padding for the content
        popupDiv.style.zIndex = 10000;
        popupDiv.style.fontFamily = 'Arial, sans-serif';
        popupDiv.style.display = 'flex'; // Arrange buttons in a row

        console.log('Creating pop-up for prompt selection.');

        // Create buttons for each option
        const options = ['Summarize', 'Explain', 'Sentiment Analysis'];
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.style.margin = '0 5px'; // Spacing between buttons
            button.style.padding = '5px 10px'; // Smaller padding for a more compact look
            button.style.border = 'none'; // No border for simplicity
            button.style.borderRadius = '5px'; // Rounded corners for buttons
            button.style.backgroundColor = '#f0f0f0'; // Light gray background for a soft look
            button.style.color = '#333'; // Dark gray text for contrast
            button.style.cursor = 'pointer';
            button.style.fontSize = '12px'; // Smaller font size
            button.style.fontWeight = 'bold'; // Bold text for button labels
            button.style.transition = 'background-color 0.3s'; // Smooth transition for hover effect

            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = '#e0e0e0'; // Darker gray on hover
            });
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = '#f0f0f0'; // Revert to original color
            });

            button.addEventListener('click', async () => {
                try {
                    // Remove the pop-up before copying to avoid copying button text
                    document.body.removeChild(popupDiv);
                    document.removeEventListener('click', handleClickOutside);
                    document.removeEventListener('keydown', handleEscKey);

                    // Attempt to clear the clipboard by overwriting with an empty value
                    await navigator.clipboard.writeText('');

                    // Escape the page text for better compatibility
                    const text = document.body.innerText.trim().replace(/'/g, "\\'");
                    let formattedText = '';

                    switch (option) {
                        case 'Summarize':
                            formattedText = `Summarize this text: '${text}'`;
                            break;
                        case 'Explain':
                            formattedText = `Explain this text: '${text}'`;
                            break;
                        case 'Sentiment Analysis':
                            formattedText = `Sentiment analysis of these comments: '${text}'`;
                            break;
                    }

                    // Copy the formatted text to the clipboard
                    await navigator.clipboard.writeText(formattedText);
                    console.log(`${option} text copied to clipboard.`);
                } catch (err) {
                    console.error('Error during button click handling:', err);
                }
            });

            popupDiv.appendChild(button);
        });

        // Add the pop-up to the body
        document.body.appendChild(popupDiv);

        // Close pop-up if clicking outside of it
        function handleClickOutside(event) {
            if (!popupDiv.contains(event.target)) {
                document.body.removeChild(popupDiv);
                document.removeEventListener('click', handleClickOutside);
                document.removeEventListener('keydown', handleEscKey);
                console.log('Pop-up closed by clicking outside.');
            }
        }

        document.addEventListener('click', handleClickOutside);

        // Close pop-up if pressing the 'Esc' key
        function handleEscKey(event) {
            if (event.key === 'Escape') {
                if (popupDiv && popupDiv.parentElement) {
                    document.body.removeChild(popupDiv);
                    document.removeEventListener('click', handleClickOutside);
                    document.removeEventListener('keydown', handleEscKey);
                    console.log('Pop-up closed by pressing Esc.');
                }
            }
        }

        document.addEventListener('keydown', handleEscKey);
        
    } catch (err) {
        console.error('Error creating pop-up:', err);
    }
})();

