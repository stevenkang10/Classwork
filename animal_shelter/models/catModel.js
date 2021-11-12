const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
    name: {
        required: [true, "Cat needs a name!"], 
        type: String
    },
    isChunky: Boolean,
    sociopathy: Number, 
    color: {
        required: [true, "Cat needs a color!"],
        type: String
    }

})

const Cat = mongoose.model("Cat", catSchema)

module.exports = Cat