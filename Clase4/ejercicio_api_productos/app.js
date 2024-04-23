const express = require("express");
const routeProductos = require("./routes/productos");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

app.use(express.json());
app.use('/productos', routeProductos)
app.use(errorHandler)

const port = 3000;

app.listen(port, () => console.log(`Express server running at port: ${port}`));
