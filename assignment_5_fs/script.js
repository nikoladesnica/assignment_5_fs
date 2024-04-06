fetch("https://randomuser.me/api/?results=5")
.then(response => response.json()) // Convert the response to JSON
.then(data => {
    let tableData = "";
    data.results.forEach(user => { // Iterate over each user in the results
        const firstName = user.name.first; // Access the user's first name
        const city = user.location.city; // Access the user's city
        // Append a new row to the tableData string
        tableData += `<tr>
            <td>${firstName}</td>
            <td>${city}</td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData; // Update the table body
})
.catch(error => console.error('Error fetching data:', error)); // Log any errors to the console
