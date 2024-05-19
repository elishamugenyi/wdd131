// Array of products
const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      "avg-rating": 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      "avg-rating": 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      "avg-rating": 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      "avg-rating": 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      "avg-rating": 5.0
    }
  ];
  
  // Function to populate Product Name options
  function populateProductOptions() {
      const productNameSelect = document.getElementById('productName');
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.text = product.name;
          productNameSelect.appendChild(option);
      });
  }
  
  // Counter for reviews completed
  let reviewsCompleted = localStorage.getItem('reviewsCompleted') || 0;
  
  // Increment counter on form submission
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
      event.preventDefault();
      reviewsCompleted++;
      localStorage.setItem('reviewsCompleted', reviewsCompleted);
      alert(`Thank you for your review! Total reviews completed: ${reviewsCompleted}`);
      this.reset();
  });
  
  // Call function to populate Product Name options
  populateProductOptions();
  