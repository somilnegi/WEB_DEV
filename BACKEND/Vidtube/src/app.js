import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true //credentials: true means cookies or auth headers can be sent in requests.
    })
)

//Common middleware
app.use(express.json({ limit: "16kb" })) //Parses incoming JSON requests.
app.use(express.urlencoded({extended: true, limit: "16kb"})) // Parses URL-encoded data (e.g., form submissions).
app.use(express.static("public")) //Serves static files like images or documents from a public/ folder.
app.use(cookieParser()) //Parses cookies from incoming requests for authentication/session handling.

// Import routes
import healthCheckRouter from "./routes/healthCheck.routes.js"
import router from "./routes/user.routes.js"
import { errorHandler } from "./middlewares/error.middlewares.js"

// Routes
app.use("/api/v1/healthcheck", healthCheckRouter)
app.use("/api/v1/users", router)
// app.use(errorHandler)

export {app}