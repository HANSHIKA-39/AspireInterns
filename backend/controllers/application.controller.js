import { Application } from "../models/application.model.js";
import { Internship } from "../models/internship.model.js";

export const applyInternship = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!internshipId) {
            return res.status(400).json({
                message: "Internship id is required.",
                success: false
            })
        };
        // check if the user has already applied for the job
        const existingApplication = await Application.findOne({ internship: internshipId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            });
        }

        // check if the jobs exists
        const internship = await Internship.findById(jobId);
        if (!internship) {
            return res.status(404).json({
                message: "Internship not found",
                success: false
            })
        }
        // create a new application
        const newApplication = await Application.create({
            internship:internshipId,
            applicant:userId,
        });

        internship.applications.push(newApplication._id);
        await internship.save();
        return res.status(201).json({
            message:"Internship applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};
export const getAppliedInternships = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// admin dekhega kitna user ne apply kiya hai
export const getApplicants = async (req,res) => {
    try {
        const internshipId = req.params.id;
        const internship = await Internship.findById(internshipId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!internship){
            return res.status(404).json({
                message:'Internship not found.',
                success:false
            })
        };
        return res.status(200).json({
            internship, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}
export const updateStatus = async (req,res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message:'status is required',
                success:false
            })
        };

        // find the application by applicantion id
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found.",
                success:false
            })
        };

        // update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:"Status updated successfully.",
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}