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
       