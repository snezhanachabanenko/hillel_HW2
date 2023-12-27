var services = {
  "haircut": "60 UAH",
  "shave": "80 UAH",
  "Head wash": "100 UAH",
  // Adding a new service
  "Head massage": "200 UAH",

  // Method for calculating the total cost of provided services
  price: function () {
    let total = 0;
    for (const service in this) {
      if (typeof this[service] === 'string' && this[service].includes('UAH')) {
        total += parseInt(this[service], 10);
      }
    }
    return total;
  },

  // Method to get the minimum cost
  minPrice: function () {
    let min = Infinity;
    for (const service in this) {
      if (typeof this[service] === 'string' && this[service].includes('UAH')) {
        min = Math.min(min, parseInt(this[service], 10));
      }
    }
    return min === Infinity ? 0 : min;
  },

  // Method to get the maximum cost
  maxPrice: function () {
    let max = 0;
    for (const service in this) {
      if (typeof this[service] === 'string' && this[service].includes('UAH')) {
        max = Math.max(max, parseInt(this[service], 10));
      }
    }
    return max;
  },
};

