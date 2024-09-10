require("dotenv").config();

const app = require("./config");

const port = process.env.APP_PORT;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
