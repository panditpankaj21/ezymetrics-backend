const express = require('express')
const {sendAlerts} = require('../controllers/alert.controller.js')
const {getLeads} = require('../services/crm.service.js')
const {getCampaign} = require('../services/marketing.service.js')

const router = express.Router();

router.post('/alerts', sendAlerts);

module.exports = router;