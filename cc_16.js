// Task 2: Fetch Products with .then()

// This function fetches the API, then if the response is ok (not an error, such as 404) it will return the json data.
// From there we want to iterate through every item and log the names. We will catch any errors and display them.
function fetchProductsThen() {
    fetch(`https://www.course-api.com/javascript-store-products`)
    .then(response => {
// If response is not ok, throw an error
        if (!response.ok){
            throw new Error("Whoops", response.statusText)
        }
        return response.json() // otherwise return the json data
    })
// After we get the json data, we want to log each item using a forEach statement. I found that I needed to access .fields.name by using ctrl + shift + J on my html tab
    .then(names => names.forEach(itemName => console.log(itemName.fields.name))) 
    .catch(error => console.error(error)); // catch the thrown error if necessary
}; 

fetchProductsThen(); 