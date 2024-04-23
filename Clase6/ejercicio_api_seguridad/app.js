const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const routerProductos = require("./routes/productos");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = 3000;
const jwtCheck = auth({
  secret: "IEAGHr9eYR9GzxBs6XRz7NoUJnVVB73N",
  audience: "http://localhost/api/productos",
  issuerBaseURL: "https://dev-7chizjevnp1qc6zd.us.auth0.com/",
  tokenSigningAlg: "HS256",
});

// Validacion en todas las rutas --> app.use(jwtCheck);
// Validacion en ruta especifica --> app.use("/api/productos", jwtCheck);

app.use(express.json());
app.use("/api/productos", jwtCheck, routerProductos);
app.use(errorHandler);

app.get("/api", (req, res) => {
  res.send("API de productos");
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
