const mongoose = require("mongoose");
const{url, db, authInfo} = require("./dbConfig").person

const connectDB = () => {
    let connection = `${url}/${db}`

    mongoose.connect(connection, authInfo)
    .then(() => console.log("DB connected..."))
    .catch(err => {
        console.log("Error connecting to DB", err)
        process.exit(1)
    })
}

module.exports = connectDB