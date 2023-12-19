const app = require("./app")
const config = require("./config")
const port = config.SERVER.PORT;

app.listen(port);
console.log(`Server running in port ${port}`);
