import mongoose from 'mongoose';

const internshipSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    internshipType:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
    }]


})

export const Internship=mongoose.model('Internship',internshipSchema);