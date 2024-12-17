import express from 'express'
import { getAllTemplates,addNewTemplate,deleteTemplate,updateTemplate,getTemplateById } from '../controllers/template_controller.js';

const templatesRouter = express.Router();

templatesRouter.get('/',getAllTemplates);
templatesRouter.get('/:id',getTemplateById);
templatesRouter.post('/',addNewTemplate);
templatesRouter.delete('/:id',deleteTemplate);
templatesRouter.put('/:id',updateTemplate);

export default templatesRouter;


