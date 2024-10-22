const express = require('express')
const { generateLeadReport, generateCampaignReport } = require('../controllers/report.controller.js')


const router = express.Router();


router.get('/leads', generateLeadReport);
router.get('/campaigns', generateCampaignReport)


module.exports = router;