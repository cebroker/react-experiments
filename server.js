//Server
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const axios = require('axios');
const bodyParser = require("body-parser");
const { URL = '', PORT = 8000 } = process.env;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

//Api Endpoint
app.get("/api/users", (req, res) => {
  res.send({ name: 'test' });
});

server.listen(PORT, () => {
  console.log(`api listening on ${PORT}`);
});

//SOCKET
const participantId = 5390503;
const getUrl =
  `http://10.21.100.92:8080/rooms?type=notifications&participantId=${participantId}&createdAtFrom=11/01/2017&createdAtTo=11/30/2017`;
const headers = {
  grant_type: 'secret',
  client_id: 'cbb35a20-c000-4492-b7b8-8969bac5d1ed',
  client_secret: '16480a3a-8524-4efb-9468-df7788eb7704',
  'content-type': 'application/json',
  'cache-control': 'no-cache',
  'postman-token': 'ddc46430-406f-9498-1591-461ee667953c'
};

//socket endpoint
io.on('connection', client => {
  client.on('subscribeMessages', interval => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(async () => {
      let response;
      try {
        response = await axios.get(getUrl, {
          headers
        });
        client.emit('messages', response.data);
      } catch (error) {
        client.emit('messages', error);
      }
    }, interval);
  });
});
