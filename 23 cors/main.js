fetch('http://localhost:3000/persons')
    .then(response => response.json())
    .then(data => {
        body = document.body;
        data.forEach(person => {
            body.innerHTML += `
                <h2>${person.name}</h2>
                <p>Age: ${person.surname}</p>
                <p>City: ${person.birthdate}</p>
            `;
        });
    })
    .catch(error => console.error('Error:', error));


    /*14:02*/