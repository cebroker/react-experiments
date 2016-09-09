import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from '../db.json';

// This sets the mock adapter on the default instance 
const mock = new MockAdapter(axios);

mock.onGet('/api/v1/messages').reply(200, data.messages);

const storeFake = (state) => {
	return {
		default: () => {},
		subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return { ...state };
		},
	};
};

global.data = data;
global.storeFake = storeFake;


