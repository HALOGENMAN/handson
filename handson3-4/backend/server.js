const http = require("http");
const fs = require("fs");
const db = require("../data.json");

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
};

const writeData = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data), "utf-8", (err) => {
    console.log(err);
  });
};

const getBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", async (chunk) => {
      body += chunk.toString();
      await writeData("../data.json", JSON.parse(body));
    });
    req.on("end", async () => {
      body = JSON.parse(body);
      resolve(body);
    });
  });
};

const updateData = async (req, res) => {
  try {
    const body = await getBody(req);
    if (body) {
      res.writeHead(200, headers);
      res.end(JSON.stringify(body));
    } else {
      res.writeHead(404, headers);
      res.end(JSON.stringify({ message: "not working" }));
    }
  } catch (error) {
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    console.log(error);
  }
};

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, headers);
    res.end(JSON.stringify(db));
  } else if (req.url === "/" && req.method === "POST") {
    updateData(req, res);
  } else {
    res.writeHead(404, headers);
    res.end(JSON.stringify({ message: "invalid request" }));
  }
});

const PORT = 4321;

server.listen(PORT, () => {
  console.log(`server is running at PORT:${PORT}`);
});
