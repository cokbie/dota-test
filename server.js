//Install express server    
const express = require('express');



const app = express();   

// Serve only the static files form the dist directory    
app.use(express.static('src'));

app.listen(8080, function(){
  console.log("Listening on port 8080!")
});

app.get('/', function(req,res) {  
    res.sendFile('index.html');   
});  

// Start the app by listening on the default Heroku port    
//app.listen(process.env.PORT || 8080);