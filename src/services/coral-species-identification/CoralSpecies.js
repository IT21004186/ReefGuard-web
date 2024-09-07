// CoralIdentification.js
async function identifyCorals(file) {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('https://coral-identification.azurewebsites.net/predict', {
            method: 'POST',
            body: formData,
            headers: {
                // Add any required headers here
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Assuming the API returns a JSON object with the base64 image string
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

export { identifyCorals };
