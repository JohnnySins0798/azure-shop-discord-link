
// Product data
const products = [
    {
        title: "FLIGHT-RADAR - 3 Months",
        description: "Get access to all premium features for 3 months. Includes priority support and exclusive content.",
        price: "€15",
        salePrice: "€13.12",
        duration: "3 Months",
        isSale: true,
        isFeatured: true,
        releaseDate: "Jun 27, 2021",
        systemRequirements: [
            "Windows 10/11 - 64-Bit",
            "Latest Drivers",
            "Active Internet Connection"
        ],
        features: [
            "24/7 Priority Support",
            "Exclusive Content Access",
            "Premium Features",
            "Regular Updates"
        ]
    },
    {
        title: "FLIGHT-RADAR - Lifetime",
        description: "Lifetime access to FLIGHT-RADAR. Best value for dedicated users.",
        price: "€30",
        duration: "Lifetime",
        isFeatured: true,
        releaseDate: "Mar 15, 2025",
        systemRequirements: [
            "Windows 10/11 - 64-Bit",
            "Latest Drivers",
            "Active Internet Connection"
        ],
        features: [
            "Lifetime Updates",
            "VIP Support",
            "All Premium Features",
            "Early Access to New Features"
        ]
    },
    {
        title: "FLIGHT RADAR - Monthly",
        description: "Get FLIGHT-RADAR for 1 Month.",
        price: "€8",
        duration: "1 Month",
        isSale: true,
        releaseDate: "Mar 15, 2025",
        systemRequirements: [
            "Windows 10/11 - 64-Bit",
            "Latest Drivers",
            "Active Internet Connection"
        ],
        features: [
            "Basic Support",
            "All Premium Features",
            "Monthly Updates"
        ]
    }
];

// Create product cards and add them to the grid
function createProductCards() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Add sale and featured badges if applicable
        if (product.isSale) {
            const saleBadge = document.createElement('div');
            saleBadge.className = 'sale-badge';
            saleBadge.textContent = 'SALE';
            card.appendChild(saleBadge);
        }

        if (product.isFeatured) {
            const featuredBadge = document.createElement('div');
            featuredBadge.className = 'featured-badge';
            featuredBadge.textContent = 'FEATURED';
            card.appendChild(featuredBadge);
        }

        card.innerHTML += `
            <h3>${product.title}</h3>
            <p>${product.duration}</p>
            <div class="price">
                ${product.salePrice ? 
                    `<p class="original-price">${product.price}</p>
                     <p class="sale-price">${product.salePrice}</p>` :
                    `<p>${product.price}</p>`
                }
            </div>
            <button onclick="handlePurchase()" class="button">Purchase</button>
        `;

        productGrid.appendChild(card);
    });
}

// Handle purchase button click
function handlePurchase() {
    // Replace with your Discord webhook URL
    const discordUrl = "YOUR_DISCORD_WEBHOOK_URL";
    window.open(discordUrl, "_blank");
    alert("Redirecting to purchase...");
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createProductCards();
});
