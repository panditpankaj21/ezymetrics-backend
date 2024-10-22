const mongoose = require("mongoose");

const connectDB = async (mongo_url) => {
    try {
        await mongoose.connect(mongo_url)
        console.log("MongoDB connected");
    } catch (error) {
        console.error(`Error: While connecting DB ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB