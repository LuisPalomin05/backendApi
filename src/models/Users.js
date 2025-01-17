const {Schema, model} = require('mongoose')


const userSchema = new Schema({ 
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true}
    ,
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = model('User', userSchema)