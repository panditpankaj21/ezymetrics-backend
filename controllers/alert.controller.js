const { sendEmail } = require('../utils/emailService.js')
const Lead = require('../models/lead.model.js')


const sendAlerts = async (req, res) => {
    const leads = await Lead.find({status: 'pending'});

    console.log(leads)

    if(leads.length > 1){
        await sendEmail('pkp20022@gmail.com', 'Alert: Many pending leads!', 'You have more than 1 pending leads.');
    }

    res.send('Alerts processed')
}

module.exports = { sendAlerts }