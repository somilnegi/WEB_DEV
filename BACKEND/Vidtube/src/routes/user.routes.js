import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js"
import { registerUser, logoutUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        }
    ]),
    registerUser,
)

// Secured routes
router.route("/logout").post(verifyJWT, logoutUser)

export default router