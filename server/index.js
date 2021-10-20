const express = require("express"); 

const app = express(); 

app.get('/',(req,res)=>{ 
    res.send("Server running").status(200)
}) 

app.listen(3000,()=>{
    console.log("Server running successfully")
})