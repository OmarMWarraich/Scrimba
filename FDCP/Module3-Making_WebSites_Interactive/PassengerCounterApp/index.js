/**
 * Challenge: GET all the comments from the blog post with ID of 2 and log to the console
 * 
 * BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * Endpoint: ??? (Check JSON Placeholder docs: https://jsonplaceholder.typicode.com/guide/ and look for the "Listing nested resources" section)
 */

 fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
 .then(res => res.json())
 .then(data => console.log(data))