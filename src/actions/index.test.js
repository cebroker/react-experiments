import { expect } from 'chai';
import { fetchMessages } from './index';
import { FETCH_MESSAGES } from './index';

describe('fetchMessages', () => {
	it('creates the correct action', () => {
		const action = fetchMessages();

		expect(action.type).to.eql(FETCH_MESSAGES);
		expect(action.payload).to.be.a('promise');

		return action.payload.then((res) => {
			expect(res.data).to.eql(global.data.messages);
		});
	});
});