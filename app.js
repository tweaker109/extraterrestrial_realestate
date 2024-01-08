// In a real-world scenario, you would fetch data from a server and dynamically populate land listings.

// Example data (replace with actual data from your backend)
const landListings = [
    { id: 1, title: 'Beautiful Countryside Acreage', price: 50000 },
    { id: 2, title: 'Prime Urban Development Lot', price: 100000 },
    // Add more listings as needed
];

// Function to display land listings
function displayListings() {
    const listingsContainer = document.getElementById('land-listings');

    // Clear previous listings
    listingsContainer.innerHTML = '';

    // Iterate through listings and create HTML elements
    landListings.forEach(land => {
        const listingElement = document.createElement('div');
        listingElement.classList.add('listing');
        listingElement.innerHTML = `
            <h2>${land.title}</h2>
            <p>Price: $${land.price}</p>
            <button onclick="purchaseLand(${land.id})">Purchase</button>
        `;
        listingsContainer.appendChild(listingElement);
    });
}

// Function to simulate land purchase (replace with actual purchase logic)
function purchaseLand(landId) {
    alert(`You have purchased land with ID ${landId}!`);
}

// Display initial listings on page load
displayListings();
