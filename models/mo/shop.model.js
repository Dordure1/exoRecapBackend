const mongoose =  require('mongoose')


const shopSchema = mongoose.Schema({

    name : {
        type : String, 
        required : true,
        trim : true,
        maxLength : 50, 
    },
    power: {
        type : Number
    },
    image : {
        type : String, 
    }
},
{
    /// options
    timestamps : true 

}
)