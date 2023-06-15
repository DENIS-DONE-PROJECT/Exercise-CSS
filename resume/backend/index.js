const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({
        message: " backend from resume",
    });
});

app.listen(PORT, () => {
    console.log(`Le port de mon backend est le : ${PORT}`);
});
