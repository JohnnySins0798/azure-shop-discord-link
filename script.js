
// Product data
const products = [
  {
    title: "Basic Flight Tracker",
    description: "Access real-time flight data with our basic tracking tool.",
    price: "$29.99",
    salePrice: null,
    duration: "1 Month",
    isSale: false,
    isFeatured: false,
    releaseDate: "2024-01-15",
    systemRequirements: [
      "Modern web browser",
      "Internet connection",
      "No installation required"
    ],
    features: [
      "Basic flight information",
      "Limited historical data",
      "Standard updates"
    ]
  },
  {
    title: "Premium Flight Tracker",
    description: "Enhanced flight tracking with additional features for aviation enthusiasts.",
    price: "$79.99",
    salePrice: "$59.99",
    duration: "6 Months",
    isSale: true,
    isFeatured: false,
    releaseDate: "2024-02-20",
    systemRequirements: [
      "Modern web browser",
      "Internet connection",
      "1GB RAM minimum"
    ],
    features: [
      "Real-time flight data",
      "Full historical archive",
      "Flight path visualization",
      "Weather overlay"
    ]
  },
  {
    title: "Professional Flight Tracker",
    description: "Full-featured flight tracking solution for professionals and businesses.",
    price: "$149.99",
    salePrice: null,
    duration: "12 Months",
    isSale: false,
    isFeatured: true,
    releaseDate: "2024-03-10",
    systemRequirements: [
      "Modern web browser",
      "High-speed internet connection",
      "2GB RAM recommended",
      "Screen resolution 1280x720 or higher"
    ],
    features: [
      "Real-time global coverage",
      "Unlimited historical data",
      "Advanced filters and alerts",
      "API access for custom integrations",
      "24/7 technical support",
      "Custom dashboards"
    ]
  },
];

// Function to create product cards
function createProductCards() {
  const productGrid = document.getElementById('product-grid');
  
  // Exit if element doesn't exist (not on home page)
  if (!productGrid) return;
  
  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Sale badge
    if (product.isSale) {
      const saleBadge = document.createElement('div');
      saleBadge.className = 'product-card-badge sale';
      saleBadge.textContent = 'SALE';
      card.appendChild(saleBadge);
    }
    
    // Featured badge
    if (product.isFeatured) {
      const featuredBadge = document.createElement('div');
      featuredBadge.className = 'product-card-badge featured';
      featuredBadge.textContent = 'FEATURED';
      card.appendChild(featuredBadge);
    }
    
    // Card header
    const header = document.createElement('div');
    header.className = 'product-card-header';
    
    const titleRow = document.createElement('div');
    titleRow.className = 'product-card-title-row';
    
    const title = document.createElement('h3');
    title.className = 'product-card-title';
    title.textContent = product.title;
    
    const toggleButton = document.createElement('button');
    toggleButton.className = 'product-card-toggle';
    toggleButton.textContent = '+';
    toggleButton.setAttribute('aria-label', 'Toggle product details');
    toggleButton.setAttribute('data-index', index);
    
    titleRow.appendChild(title);
    titleRow.appendChild(toggleButton);
    
    const duration = document.createElement('p');
    duration.className = 'product-card-duration';
    duration.textContent = product.duration;
    
    header.appendChild(titleRow);
    header.appendChild(duration);
    
    // Card content
    const content = document.createElement('div');
    content.className = 'product-card-content';
    
    const details = document.createElement('div');
    details.className = 'product-card-details';
    
    const info = document.createElement('div');
    info.className = 'product-card-info';
    
    const releaseDateLabel = document.createElement('p');
    releaseDateLabel.textContent = 'Release date:';
    
    const releaseDateValue = document.createElement('p');
    releaseDateValue.textContent = product.releaseDate;
    
    info.appendChild(releaseDateLabel);
    info.appendChild(releaseDateValue);
    
    const priceContainer = document.createElement('div');
    priceContainer.className = 'product-card-price';
    
    if (product.salePrice) {
      const originalPrice = document.createElement('p');
      originalPrice.className = 'product-card-original-price';
      originalPrice.textContent = product.price;
      
      const salePrice = document.createElement('p');
      salePrice.className = 'product-card-sale-price';
      salePrice.textContent = product.salePrice;
      
      priceContainer.appendChild(originalPrice);
      priceContainer.appendChild(salePrice);
    } else {
      const regularPrice = document.createElement('p');
      regularPrice.className = 'product-card-regular-price';
      regularPrice.textContent = product.price;
      
      priceContainer.appendChild(regularPrice);
    }
    
    details.appendChild(info);
    details.appendChild(priceContainer);
    
    // Expanded section (hidden by default)
    const expandedSection = document.createElement('div');
    expandedSection.className = 'product-card-expanded';
    expandedSection.id = `product-expanded-${index}`;
    
    // Description section
    const descriptionTitle = document.createElement('h3');
    descriptionTitle.textContent = 'Description';
    
    const descriptionText = document.createElement('p');
    descriptionText.textContent = product.description;
    
    expandedSection.appendChild(descriptionTitle);
    expandedSection.appendChild(descriptionText);
    
    // System requirements section
    const requirementsTitle = document.createElement('h3');
    requirementsTitle.textContent = 'System Requirements';
    
    const requirementsList = document.createElement('ul');
    product.systemRequirements.forEach(req => {
      const listItem = document.createElement('li');
      listItem.textContent = req;
      requirementsList.appendChild(listItem);
    });
    
    expandedSection.appendChild(requirementsTitle);
    expandedSection.appendChild(requirementsList);
    
    // Features section
    const featuresTitle = document.createElement('h3');
    featuresTitle.textContent = 'Features';
    
    const featuresList = document.createElement('ul');
    product.features.forEach(feature => {
      const listItem = document.createElement('li');
      listItem.textContent = feature;
      featuresList.appendChild(listItem);
    });
    
    expandedSection.appendChild(featuresTitle);
    expandedSection.appendChild(featuresList);
    
    // Purchase button
    const purchaseButton = document.createElement('button');
    purchaseButton.className = 'button';
    purchaseButton.textContent = 'Purchase';
    
    content.appendChild(details);
    content.appendChild(expandedSection);
    content.appendChild(purchaseButton);
    
    // Assemble the card
    card.appendChild(header);
    card.appendChild(content);
    
    productGrid.appendChild(card);
    
    // Add event listeners
    toggleButton.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      const expandedSection = document.getElementById(`product-expanded-${index}`);
      
      if (expandedSection.classList.contains('active')) {
        expandedSection.classList.remove('active');
        this.textContent = '+';
      } else {
        expandedSection.classList.add('active');
        this.textContent = '-';
      }
    });
    
    purchaseButton.addEventListener('click', function() {
      // Discord redirect
      const discordUrl = "https://discord.gg/vg7bNEavP5";
      window.open(discordUrl, "_blank");
      showToast('Redirecting to purchase...', 'success');
    });
  });
}

// Toast notification function
function showToast(message, type = 'success', duration = 3000) {
  const toastContainer = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Remove toast after duration
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, duration);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  createProductCards();
  
  // Highlight active page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Highlight active page in footer
  const footerLinks = document.querySelectorAll('.footer-link');
  footerLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
