import express from 'express';

const app = express();

app.use(express.urlencoded()); //Now the server can parse URL-encoded bodies

app.use(express.json()); //Now the server can parse JSON bodies

app.use(express.static("public")); //Serve static files from the "public" directory

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.get("/login", (req, res) => {
    res.send("Login Page");
})

app.get("/purchase", (req, res) => {
    res.send("Purchase Page");
})

export default app;