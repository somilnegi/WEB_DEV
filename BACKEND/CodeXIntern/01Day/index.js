import express from 'express';

const app = express();
const PORT_NUMBER = 3000;

app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.get("/login", (req, res) => {
    return res.send("Please Login to your account");
})

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
    
})
