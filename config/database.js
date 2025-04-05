const mongoose = require("mongoose");

//.env is used to load environmenmt into process object
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)  
    .then(() => {console.log("DB ka connection Successful")})
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

module.exports = dbConnect;