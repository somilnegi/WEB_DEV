import app from "./app.js";
import connectDb from "./database/db.js";

connectDb().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
    .catch(err => {
        console.error('Database connection failed:', err);
})