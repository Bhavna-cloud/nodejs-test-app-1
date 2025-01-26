const express = require("express");

const app = express()


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }))

//Testing
//app

const PORT = process.env.PORT || 5000

console.log(PORT);

app.get("/", (res, req) => {
    req.send("NodeJS CICD auto Triggers Completed")
})



app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
