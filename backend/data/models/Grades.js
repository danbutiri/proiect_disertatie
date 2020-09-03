const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GradesSchema = new Schema({
    nota: {
        type: Number,
        required: true
    },
    test_id: {
        type: Schema.Types.ObjectId,
        ref: 'Tests',
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    raspuns: [{
        type: Number,
        required: true
    }],
    intrebare: [{
        type: Schema.Types.ObjectId,
        ref: 'Questions',
        required: true
    }]
}, { timestamps: true });

const GradesModel = mongoose.model('Grades', GradesSchema);
module.exports = GradesModel;