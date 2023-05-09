const mongoose = require('mongoose')

const schema = mongoose.Schema({

    patient:{
        type: mongoose.ObjectId,
        ref: 'Patient',         
        required: true
    },

    dentist:{
        type: mongoose.ObjectId,
        ref: 'Dentist',         
        required: true
    },

    datetime: {
        type: Date,
        required: true,
        default: Date.now()   
      },

       //Subdocumento incorporado

       exams:{
            name:{
                type: String,
                required: true
            }
       }
})

module.exports = mongoose.model('Appointment', schema, 'appointments')