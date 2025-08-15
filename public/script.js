async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const res = await fetch('/weather', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city })
        });

        const data = await res.json();

        if (data.error) {
            document.getElementById('result').innerHTML = `<p style="color:red">${data.error}</p>`;
        } else {
            document.getElementById('result').innerHTML = `
                <h2>${data.city}</h2>
                <h3>${data.temp}°C</h3>
                <p>${data.description}</p>
                <img src="${data.icon}" alt="Weather icon">
            `;
        }
    } catch (err) {
        document.getElementById('result').innerHTML = `<p style="color:red">Error fetching weather</p>`;
    }
}
