const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io")
const cors = require("cors")
const port = 5000;

app.use(cors());

//creating the server
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET"]
    }
});


//getting candidate names
let candidateNames = ["name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8"];

//getting their voteCount
let voteCounts = [110, 200, 400, 50, 150, 60, 100, 100]

// getting the total vote count by getting the total count of registered voters
let totalVotes = 3000;

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

//sending data to the frontend
io.on("connection", (socket)=>{
    console.log(`Client Connected: ${socket.id}`);

    //emiting the candidates data
    socket.emit("candidatesData", candidates);

    //emiting the total votes count
    socket.emit("total", totalVotes);
})

server.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})