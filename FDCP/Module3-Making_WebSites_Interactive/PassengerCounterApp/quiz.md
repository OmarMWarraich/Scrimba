1. What does it mean for the server to be "Stateless"?
It forgets the interaction after the response is sent.

* In the Mike's Bikes example, what URL endpoint (and request method)
  would you expect to use in order to accomplish the following:
  
    2. Retrieve a list of all the bikes that are sold?
       GET /bikes

    3. Retrieve detailed information about the bike with an ID of 42?
       GET /bikes/42
    
    4. Update the price of the bike with an ID of 21?
       PUT /bikes/21
    
    
    5. Add a new bike to the list of bikes being sold?
       POST /bikes
    
    
    6. Remove the bike with an ID of 56 from the list of bikes?
       DELETE /bikes/56
       
* Nested Resources

1. How is a nested resource URL like /bikes/123/reviews
   different from an endpoint like /reviews?
   /bikes/123/reviews - return an array of reviews about that specific bike
   /reviews - return an array of all reviews on the site
  
2. What URL might you use to GET the review with an ID of 5 on the bike
   with the ID of 123?
   /bikes/123/reviews/5

3. Describe a "URL Parameter" in your own words:
   Variable inside the URL that acts as a placeholder for the real value
   (Oftentimes they replace the ID of the resource)

* Query Strings

At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get a list of all bike racks sold on the site?
/bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
/bikeracks?available=true  ==> {available: "true"} (Will be parsed as a string)

3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
/bikeracks?brand=thule&numBikes=4