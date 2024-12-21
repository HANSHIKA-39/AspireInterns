import mongoose from "mongoose";

const applicationSchema=mongoose.Schema({
    Internship:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Internship',
        required:true
    },

    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['Applied','Accepted','Rejected']
    }
},{timestamps:true})

export const Application=mongoose.model('Application',applicationSchema);