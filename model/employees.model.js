const mongoose = require('mongoose');


// schema define

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    mobileNumber:{
        type:Number,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true,
    },
    profession:{
        type:String
    }
})

// model creation using the schema define.

module.exports = mongoose.model('Employees', employeeSchema);




