import {Internship } from "../models/internship.model.js";

// admin post krega job
export const postInternship = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, internshipType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        };
        const internship = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            internshipType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}
// student k liye
export const getAllInternships = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });
        if (!internships) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// student
export const getInternshipById = async (req, res) => {
    try {
        const internshipId = req.params.id;
        const internship = await Internship.findById(internshipId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Internships not found.",
                success: false
            })
        };
        return res.status(200).json({ internship, success: true });
    } catch (error) {
        console.log(error);
    }
}
// admin kitne job create kra hai abhi tk
export const getAdminInternships = async (req, res) => {
    try {
        const adminId = req.id;
        const internships = await Internship.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!internships) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            internships,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}