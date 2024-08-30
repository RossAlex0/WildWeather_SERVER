require("dotenv").config();

const app = require("./routes/config");

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});