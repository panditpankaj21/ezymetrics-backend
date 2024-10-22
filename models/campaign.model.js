const moongose = require("mongoose")

const campaignSchema = new moongose.Schema({
    campaignName: String,
    clicks: Number,
    impressions: Number,
    budget: Number,
}, {timestamps: true});


const Campaign = moongose.model('Campaign', campaignSchema);

module.exports = Campaign;