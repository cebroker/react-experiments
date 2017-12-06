import dotenv from 'dotenv';
import openSocket from 'socket.io-client';
dotenv.config();

const { REACT_APP_SOCKET_URL = '/' } = process.env;

const socket = openSocket(REACT_APP_SOCKET_URL);

function subscribeToMessage(cb) {
  socket.emit('subscribeMessages', 1000);
  socket.on('messages', messages => cb(null, messages));
}

export { subscribeToMessage };
