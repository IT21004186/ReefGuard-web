async function predict(file) {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('https://coral-disease-identification-model.azurewebsites.net/predict', {
            method: 'POST',
            body: formData,
            headers: {
               
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

module.exports = { predict };
