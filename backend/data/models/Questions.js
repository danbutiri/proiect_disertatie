const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
    enunt: {
        type: String,
        required: true
    },
    raspuns_corect: {
        type: Number,
        required: true
    },
    test_id: {
        type: Schema.Types.ObjectId,
        ref: 'Tests',
        required: true
    },
    raspunsuri: [{
        type: String,
        required: true
    }]
}, { timestamps: true });

const QuestionsModel = mongoose.model('Questions', QuestionsSchema);
module.exports = QuestionsModel;