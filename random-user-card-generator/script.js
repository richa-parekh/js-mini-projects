const cardContainer = document.getElementById("cardContainer");

// Async function for fetch user data
async function fetchRandomUser() {
    try {
        cardContainer.innerHTML = "<p class='banner loading'>Loading user...</p>"

        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
     
        const user = data.results[0];
        const userArr = data.results[0];
       
        displayUserCard(user);

    } catch (error) {
        cardContainer.innerHTML = "<p class='banner error'>>Failed to fetch user 😞</p>"
    }
}

function displayUserCard(user){
    // Remove loading message
    let indicator = document.querySelector(".loading");
	if (indicator) {
		indicator.remove();
	}
    let userCard = document.getElementById('card');
    let template = userCard.content.cloneNode(true);

    // Add dynamic content
	template.getElementById("image").src = user.picture.large;
    template.getElementById("first").textContent = user.name.first;
    template.getElementById("last").textContent = user.name.last;
    template.getElementById("city").textContent = user.location.city;
    template.getElementById("country").textContent = user.location.country;
    template.getElementById("email").textContent = user.email;
    
	cardContainer.appendChild(template);
}

// On button click fetch random user
document.getElementById("btn").addEventListener("click", fetchRandomUser);

// Load user on page load
fetchRandomUser();