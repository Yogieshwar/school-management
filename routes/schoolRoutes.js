import express from "express"

const router=express.Router();

import { addSchool,listSchools } from "../controllers/schoolController.js";

router.post('/addschool',addSchool)
router.get('/getschools',listSchools)

export default router;