const express = require("express");
const cors = require("cors")
;const app = express();

// app.listen(7000,()=>{
//     console.log("Server is running at port 7000");
// })

var corsOptions = {
    origin: "http://localhost:7000"
}

app.use(cors(corsOptions));
app.use(express.json);
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.json({ message: " Jwt auth application"})
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
}) 