import express from express
PORT = 3000;

const app = express()

app.listen(PORT, () => {
    res.send(`Hello world from PORT ${PORT}`)
})