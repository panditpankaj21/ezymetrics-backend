const axios = require('axios')
const Lead = require('../models/lead.model.js')


const  getLeads = async (req, res) => {
    try {
        const res = await axios.get(`https://${process.env.PROJECT_TOKEN}.mockapi.io/leads`);
        const leads = res.data;

        //save to db
        for(let lead of leads){
            const newLead = new Lead(lead); 
            await newLead.save()
        }

    }  catch (error) {
        console.error(`Error while fetching the leads ${error}`);
    }

}

module.exports = { getLeads };
