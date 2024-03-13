const express = require("express");
const app = express();
const port = 5000;

//getting candidate names
const candidateNames = ["name1", "name2", "name3", "name4"];

//getting their voteCount
const voteCounts = [110, 200, 400, 50]

//mapping the candidateNames and voteCounts into an array of obejcts
const candidates = candidateNames.map((name, index)=>({
    name,
    voteCount: voteCounts[index]
}));

//sorting the candidates array in decending order according to the voteCount
candidates.sort((a, b)=> b.voteCount - a.voteCount)


//sending a respond to check whether the backend works or not
app.get('/', (req, res)=>{
    res.json(candidates);
});

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})