const express = require("express");
const app = express();
const port = 3000;

app.get("/paymentrequest", (req, res) => {
  app.get("https://qa-api.lifecloud-qr.com/api/paymentrequest", req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
