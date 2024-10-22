const Lead = require('../models/lead.model.js')
const Campaign = require('../models/campaign.model.js')
const PDFDocument = require('pdfkit')
const { Parser } = require('json2csv')

const generateLeadReport = async (req, res) => {
    const leads = await Lead.find({});
    const doc = new PDFDocument();

    res.setHeader('Content-type', 'application/pdf')
    doc.pipe(res);

    doc
    .fontSize(15)
    .text('Lead Reports', 100, 100);

    let cnt = 1;
    leads.forEach(lead => {
        doc.text(`${cnt}. ${lead.name}, ${lead.email}, ${lead.status}`);
        cnt++;
    });

    doc.end();
}


const generateCampaignReport = async (req, res) => {
    const campaigns = await Campaign.find({});
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(campaigns);

    res.header('Content-Type', 'text/csv');
    res.attachment('campagin_report.csv');
    res.send(csv)
}


module.exports = {
    generateLeadReport,
    generateCampaignReport
}