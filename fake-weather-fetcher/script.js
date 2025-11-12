function getWeatherData() {
    return new Promise((resolve, reject) => {
        // Set isSuccess = true for then, and isSuccess = false for catch
        const isSuccess = true; 
        const delay = 1500;

        setTimeout(() => {
            if (isSuccess) {
                resolve({
                    city: "London",
                    temperature: 30,
                    condition: "Sunny ☀️"
                });
            } else {
                reject("Network error: failed to fetch weather data ❌");
            }
        }, delay);
    });
}

const btn = document.getElementById("fetchWeatherBtn");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", () => {
    resultDiv.textContent = "Fetching weather...";
    resultDiv.className = "loading";

    getWeatherData()
        .then((data) => {
            resultDiv.className = "success";
            resultDiv.innerHTML = `
                <strong>${data.city}</strong><br>
                🌡️ ${data.temperature}°C<br>
                ${data.condition}
            `;
        })
        .catch((error) => {
            resultDiv.className = "error";
            resultDiv.textContent = error;
        })
        .finally(() => {
            console.log("Fetch attempt complete.");
        });
});