document.addEventListener("DOMContentLoaded", function() {
  console.log('here is the products page')

  var products = [
    {id: 1, name: "lighsaber", price: 100},
    {id: 2, name: "basketball", price: 10},
    {id: 3, name: "sleeping bag", price: 50}
  ];

  console.log(products);

  var productsHTML = "";

  products.forEach(function(product) {
    productsHTML += "<h2>" + product.name + "</h2>" + "<p>" + product.price + "</p>"
  })

  var productsDiv = document.querySelector('.products');

  productsDiv.innerHTML = productsHTML;

  console.log(productsHTML);
})

