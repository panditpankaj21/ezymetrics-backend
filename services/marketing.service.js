const axios = require("axios")
const Campaign = require('../models/campaign.model.js')

const getCampaign = async () => {
    try {
        const response = await axios.get(`https://${process.env.PROJECT_TOKEN}.mockapi.io/campaigns`);
        const campaigns = response.data;

        for(let campaign of campaigns){
            const newCampaign = new Campaign(campaign);
            await newCampaign.save();
        }
        
    } catch (error) {
        console.error(`Error: while  fetching campaign data`, error)

    }
}

module.exports = { getCampaign }