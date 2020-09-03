const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    available_at: {
        type: Date,
        required: true
    },
    expires_at: {
        type: Date,
        required: true
    },
    // available to grupa
    available_to: {
        type: String,
        required: true
    }
}, { timestamps: true });

const TestsModel = mongoose.model('Tests', TestsSchema);
module.exports = TestsModel;