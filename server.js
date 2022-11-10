const express = require("express");
const axios = require("axios");
const app = express();
const port = 8000;
app.use(express.json());

app.get("/", async (req, res) => {
    console.log(req.body);
  res.send("Running Server");
});
app.post("/paymentrequest", async (req, res) => {
  console.log(req.body);
  await axios.post(
    "https://qa-api.lifecloud-qr.com/api/paymentrequest",
    req.body
  );
  res.send({ message: "Success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
