require('dotenv').config()

const express = require('express')
const connectDB = require('./config.js')
const reportRoutes = require('./routes/report.route.js')
const alertRoutes = require('./routes/alert.route.js')

const app = express()

connectDB(process.env.DATABASE_URL)
.then(() => {
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection Failed!!", err)
})

app.use(express.json())

app.use('/api/reports', reportRoutes);
app.use('/api', alertRoutes);



