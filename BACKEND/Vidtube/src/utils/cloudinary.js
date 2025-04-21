import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import dotenv from "dotenv"
import e from 'express';
import fs from "fs";

dotenv.config()

//Configure cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(
            localFilePath, {
                resource_type: "auto"
            }
        )
        console.log("File uploaded on cloudinary. File src: " + response.url);
        // Delete the file from server after it is uploaded
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        console.error("Cloudinary upload failed:", error.message || error);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        throw error;
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        console.log("Deleted from cloudinary. Public id: ", publicId);   
    } catch (error) {
        console.log("Error deleting from cloudinary", error);
        return null
    }
}

export {uploadOnCloudinary, deleteFromCloudinary}