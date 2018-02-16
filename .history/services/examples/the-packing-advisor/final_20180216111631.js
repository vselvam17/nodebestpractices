const weather = require("weather-js");

weather.find({ search: "San Francisco, CA", degreeType: "C" }, 
function(err, result) {
    result.forEach(location => {
        console.log(JSON.stringify(location.forecast));      
    });
  
});
