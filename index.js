//nodemon is so that we dont need to run the server everytime we make changes in code.
//nodemon syncs all the changes as we make without the need for restarting the server
const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server  //is port number pe kabhi koi communication hoti hai to uspe respond karna hai
app.listen(PORT, () => {
     console.log(`Server started successfully at ${PORT}`);
})

//CONNECT TO THE DATABASE
const dbconnect = require("./config/database");
dbconnect();

//default route
app.get("/",(req,res) => {  //"/" indicates home page
    res.send(`<h1> This is HOMEPAGE baby </h1>`); 
})   