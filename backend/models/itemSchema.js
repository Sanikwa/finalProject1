const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // example of document referencing
    price: { type: String, required: true},
    image: { type: String,}
}, {timestamps: true})
const Item = mongoose.model('Item', itemSchema)
module.exports = Item;