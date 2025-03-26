// Task 2: Fetch Products with .then()

// fetches api, then if the response is ok (not an error, such as 404) it will return the json data. then it will iterate through every item and log the names.
function fetchProductsThen() {
    fetch(`https://www.course-api.com/javascript-store-products`)
    .then(response => {
    // If response is not ok, throw an error
        if (!response.ok){
            throw new Error("Whoops", response.statusText)
        }
        return response.json() // otherwise return the json data
    })
    // After we get the json data, we want to log each item using a forEach statement. I found that I needed to access .fields.name because I used ctrl + shift + J on my html tab
    .then(names => names.forEach(itemName => console.log(itemName.fields.name))) 
    .catch(error => console.error(error)); // catch the thrown error if necessary
}; 

fetchProductsThen(); 

// Task 3: Fetch products with async/ wait 

async function fetchProductsAsync() {
    try {
        const response = await fetch (`https://www.course-api.com/javascript-store-product`)

        if(!response.ok){
            throw new Error("Response was not ok");
        }

    // Iterating over the first 5 items. I initially tried to do this with a for loop in displayProducts but it made it so that each item name printed 5 times.
        const data = await response.json();
    //For the first 5 items, we are running displayProducts and taking name, price, and image as a parameter
        data.slice(0,5).forEach(item => displayProducts(item.fields.name, item.fields.price, item.fields.image));
    }
// Catching the thrown error by passing it to handleError
    catch (error) {
        handleError(error)
    }
}

// Task 4:

// Creating a new paragraph element and setting the text content of it to products and price, then appending it to the productContainer div. Doing something similar for the image
function displayProducts(products, price, image) {

    const productContainer = document.getElementById("product-container");
    const productName = document.createElement("p");
    productName.textContent = `${products}, ${price}`;

    const productImage = document.createElement("img");
    productImage.src = image[0].url // The image is an object contained in an array ("image"). So we have to access the url of correct item [0] to display it

    productContainer.appendChild(productName);
    productContainer.appendChild(productImage);
}

// Task 5:

// handleError will log "An error occured:" followed by the error message passed to it.
function handleError(foundError) {
    console.error(`An error occurred: ${foundError.message}`) 
}

fetchProductsAsync();