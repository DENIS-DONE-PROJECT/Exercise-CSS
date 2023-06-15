const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/profile", (req, res) => {
    res.json({
        fullname: "Denis Avocat",
        title: " Développeur Web et Applications Mobile",
    });
});

app.listen(PORT, () => {
    console.log(`Le port de mon backend est le : ${PORT}`);
});
