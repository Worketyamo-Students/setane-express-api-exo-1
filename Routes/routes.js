import { Router } from "express";
import { controller } from "../Controllers/controller.js";
const router = Router();
router.get("/student", controller.getStudents);
router.post("/student", controller.postStudent);

export default router;
