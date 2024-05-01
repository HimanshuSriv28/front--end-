function getData() {
    const endpoint = document.getElementById('apiEndpoint').value;
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            displayJSON(data);
        })
        .catch(error => {
            document.getElementById('error').innerText = error.message;
        });
}

function displayJSON(data) {
    const jsonData = document.getElementById('jsonData');
    jsonData.value = JSON.stringify(data, null, 4);
}

function renderHTML() {
    // Implement rendering JSON as HTML
}

function renderMarkdown() {
    // Implement rendering JSON as Markdown
}
