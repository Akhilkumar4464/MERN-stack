 function fetchDataWithCallback(callback) {
            console.log("Fetching data...");
  setTimeout(() => {
                const data = {
                    name: "John",
                    age: 30,
                    city: "New York"
                };
              
                callback(data);
            }, 1000);
        }

     fetchDataWithCallback(callback) 
     .then(data => {
            console.log("Data received:", data);
        }
        )
        
     
     

         