const app = require("./app/app");
const config = require("./config/config");
const port = config.SERVER.PORT;

app.listen(port);
console.log(`Server running in port ${port}`);
