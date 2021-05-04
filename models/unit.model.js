import mongoose from 'mongoose';

const unitSchema = mongoose.Schema({
    serialNum: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    initialized: {
        type: Boolean,
        default: false
    },
    shipped: {
        type: Boolean,
        default: false
    },
    stations: {
        type: Array,
        default: []
    }
})

const Unit = mongoose.model('Unit', unitSchema);

export default Unit;