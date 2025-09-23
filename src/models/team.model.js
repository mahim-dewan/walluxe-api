const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
    name: {
        type:String,
        require:[true,"Name is required"]
    },
    email:{
        type:String,
        require:[true, "Email is required"],
        unique:true
    }
})

const Team = model("teams",teamSchema)

module.exports = Team