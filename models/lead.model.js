const moongose = require("mongoose")

const leadSchema = new moongose.Schema({
    name: String,
    email: String,
    status: String,
    source: String,
}, {timestamps: true});

const Lead = moongose.model('Lead', leadSchema);

module.exports = Lead;
