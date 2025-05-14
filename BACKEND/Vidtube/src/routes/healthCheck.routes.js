import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()
router.use(verifyJWT)
router.route("/").get(healthCheck)

// router.route("/test").get(healthCheck)

export default router