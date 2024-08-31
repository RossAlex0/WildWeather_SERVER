require("dotenv").config();

const app = require("./routes/config");

const port = process.env.APP_PORT;

app.listen(3000, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });