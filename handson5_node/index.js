const path = require("path");

const express = require("express");
const async = require("hbs/lib/async");
const data = require("./db.json");
const Handlebars = require("hbs");
const paginate = require("handlebars-paginate");

const PORT = 8080;

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "./public")));

Handlebars.registerHelper("paginate", paginate);
Handlebars.registerHelper("times", function (n, block) {
  var accum = "";
  for (var i = 1; i < n; ++i) accum += block.fn(i);
  return accum;
});

const sendData = (start, amount) => {
  return data.slice(start, start + amount);
};

const len = data.length;

app.use("/", (req, res, next) => {
  let pagee = req.query.p - 1 || 0;
  const total = Math.floor(len % 5 === 0 ? len / 5 : len / 5 + 1);
  pagee = pagee < 0 ? 0 : pagee + 1 > total ? total - 1 : pagee;
  res.render("index", {
    total: len % 5 === 0 ? len / 5 : len / 5 + 1,
    data: sendData(pagee * 5, 5),
    active: pagee + 1,
    pagination: {
      page: pagee + 1,
      pageCount: len % 5 === 0 ? len / 5 : len / 5 + 1,
      emps: sendData(pagee * 5, 5),
    },
  });
});

app.listen(PORT, () => {
  console.log(`app is running on port:${8080}`);
});
