import { query } from "../services/db.js";

import {v4 as uuid} from 'uuid';

export const getAllTemplates = async (req,res) => {
    try {
        const response = await query(`select * from template`);
        if (response instanceof Error) {
            return res.status(500).json({
                message : "No templates found"
            })
        }
        return res.status(200).json(response.rows);
    }
    catch(error) {
        console.error(error);
    }
}

export const getTemplateById = async (req,res) => {
    try {
        const id = req.params.id;
        const response = await query(`select * from template where template_id=$1`,[id]);
        if (response instanceof Error) {
            return res.status(500).json({
                message : "No template found with the id"
            })
        }
        if (response.rowCount < 1) {
            return res.status(404).json({
                message : "No template found with the id"
            })
        }
        return res.status(200).json(response.rows);
    } catch (error) {
        console.error(error)
    }
}


export const addNewTemplate = async (req,res) => {
    try {
        const template_id = uuid();
        const {
            template_name,
            template_content,
            creation_date,
            type
        } = req.body;
        console.log(template_id,template_name,template_content,creation_date,type)
        if (!template_name || !template_content || !creation_date || !type) {
            return res.status(400).json({
                message : "Please provide all the details"
            })
        }
        const response = await query(`insert into template (template_id,template_name,template_content,creation_date,type) values ($1,$2,$3,$4,$5)`,[template_id,template_name,template_content,creation_date,type]);
        if (response instanceof Error) {
            console.log(response)
            return res.status(500).json({
                message : "Failed to add template"
            })
        }
        return res.status(201).json({
            message : "Template added successfully"
        })
    } catch (error) {
        console.error(error)
    }
}


export const deleteTemplate = async (req,res,next) => {
    try {
        const id = req.params.id;
        const response = await query (`delete from template where template_id=$1`,[id]);
        if (response instanceof Error) {
            return res.status(500).json({
                message : "Failed to delete template"
            })
        }
        if (response.rowCount < 1) {
            return res.status(404).json({
                message : "No template found with the id"
            })
        }
        return res.status(200).json({
            message : "Deleted template successfully"
        })
    } catch (error) {
        console.error(error)
    }
}


export const updateTemplate = async (req,res,next) => {
    try {
        const template_id = req.params.id;
        const {
            template_name,
            template_content,
            creation_date,
            type
        } = req.body;
        if (!template_name || !template_content || !creation_date || !type) {
            return res.status(400).json({
                message : "Please provide all the details"
            })
        }
        const response = await query (`update template set template_name=$1,template_content=$2,creation_date=$3,type=$4 where template_id=$5`,[template_name,template_content,creation_date,type,template_id]);
        if (response instanceof Error) {
            return res.status(500).json({
                message : "Failed to update template"
            })
        }
        if (response.rowCount < 1) {
            return res.status(404).json({
                message : "No template found with the id"
            })
        }
        return res.status(200).json({
            message : "Template updated successfully"
        })
    } catch (error) {
        console.error(error)
    }
}
