const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json(), express.urlencoded({ extended: true }));

require("./config/mogoose.config");
require("./routes/productManager.routes")(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

