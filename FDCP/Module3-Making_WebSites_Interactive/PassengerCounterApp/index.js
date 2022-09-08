/**
 * Challenge:
 * 
 * Send a request to the JSON Placeholder API using `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 * 
 * Documentation: https://jsonplaceholder.typicode.com/
 * 
 * Log the response data to the console
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => console.log(data))