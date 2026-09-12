let products = [
    {
        name: "Shoes",
        price: 2000,
        imageUrl: "shoes.jpg",
        stock: true,
        discount: 5
    },
    {
        name: "T-Shirt",
        price: 800,
        imageUrl: "tshirt.jpg",
        stock: true,
        discount: 11
    },
    {
        name: "Laptop",
        price: 50000,
        imageUrl: "laptop.jpg",
        stock: false,
        discount: 5
    }
];


console.log("Hello")
let cards = document.getElementById("cards");
for(let i = 0; i < products.length; i++) {
    let discount = parseFloat(products[i].discount)
    let afterDiscount = products[i].price-products[i].price*discount/100;
    cards.innerHTML += `
    <div>
    <img src="${products[i].imageUrl}">
    <h2>Product Name:${products[i].name}</h2>
    <p>Price: ${products[i].price}</p>
    <p>${products[i].stock ? "Availabe" : "Out of Stock"}</p>
    <p>AfterDiscount :${afterDiscount}</p>
    
    </div>
    `;
}