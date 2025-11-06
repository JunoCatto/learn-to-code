// create express app to basic math functions
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
const app = express();
const port = 3000;

//http://localhost:3000/add?a=1&b=20
app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`${a} + ${b} = ${a + b}`);
});

app.get("/sub", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`${a} - ${b} = ${a - b}`);
});

app.get("/mul", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`${a} * ${b} = ${a * b}`);
});

app.get("/div", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`${a} / ${b} = ${a / b}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
