const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/paymentrequest", (req, res) => {
  axios.post("https://api.liceloud-qr.com/api/paymentrequest", req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
