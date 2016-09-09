import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance 
const mock = new MockAdapter(axios);

const data = {
	messages: [
		{id: 123, hasAttachment: false, read: true, subject: 'This is a foo'},
		{id: 124, hasAttachment: false, read: false, subject: 'This is a bar'},
		{id: 125, hasAttachment: true, read: true, subject: 'This is a tar'}
	]
};

mock.onGet('/api/v1/messages').reply(200, data.messages);

global.data = data;


