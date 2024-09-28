/*
The fetch() function in JavaScript is a modern way to make network requests and handle responses from servers. 
It provides a simpler and more powerful interface for 
performing asynchronous HTTP requests compared to older methods like XMLHttpRequest. 
The fetch() function returns a Promise that resolves to the Response object representing the result of the request.
*/

//BacsicSyntax 
fetch(url, [options])
    .then(response => {
        // Handle the response object
    })
    .catch(error => {
        // Handle errors
    });

//Key Feature Of fetch()

/*

1 . Promises-Based: fetch() uses promises, 
which means it provides a cleaner and more flexible way 
to handle asynchronous operations compared to callbacks.

2 . Headers: You can set request headers by passing a headers property in the options object.

3 . Error Handling: While the fetch() promise will not reject on HTTP errors like 404 or 500, 
it will reject if there is a network failure or if anything prevents the request from completing. 
You can handle these cases in the .catch() block.

*/