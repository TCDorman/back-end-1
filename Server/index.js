const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/users" , (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});



app.get("/whether/:temperature", (req, res) => {
    const phrase = '<h3>It was ${req.params.temperature} today</h3>';
    res.status(200).send(phrase);
});

app.listen(5040, () => console.log('Server listening on 5040.'))