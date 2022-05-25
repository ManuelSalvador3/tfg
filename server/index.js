const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());


app.post("/registering", async(req, res) => {
    console.log(req)
    try {
        const {data} = req.body;
        // console.log(req.body.second_name);
        const registering = await pool.query(
            "INSERT INTO users (second_name, name, username, password, email) VALUES($1, $2, $3, $4, $5)", 
            [req.body.second_name, req.body.name, req.body.username, req.body.password, req.body.email]
        );
        
        res.json(registering)

    } catch (err) {
        console.log(err.message);
    }
})

app.get("/login/:username/:password", async(req, res) => {
    try {
        const { username } = req.params;
        const { password } = req.params;
        const loginIn = await pool.query(
            "SELECT username, password from users WHERE username = $1 AND password = $2",
            [username, password]
        );
        console.log(loginIn.rows)
        res.json(loginIn.rows);
    } catch (err) {
        console.log(err.message);
    }
})




app.listen(5000, () => {
    console.log("Server started on port 5000");
});

