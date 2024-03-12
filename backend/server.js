const express = require("express");
const app = express();
const port = 3000;

//sending a respond to check whether the backend works or not
app.get('/', (req, res)=>{
    res.json("hello from the backend!");
});

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})