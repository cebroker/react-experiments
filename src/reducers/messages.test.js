import { expect } from 'chai';
import messages from './messages';
import { FETCH_MESSAGES } from '../actions';

it('returns default when unknown action', () => {
	expect(messages(undefined, {})).to.eql([]);
})

it('handles action of type FETCH_MESSAGES', () => {
	const DATA =  [
		{id: 123, hasAttachment: false, read: true},
		{id: 124, hasAttachment: false, read: false},
		{id: 125, hasAttachment: true, read: true}
	];
	
	const action =  {type: FETCH_MESSAGES, payload: {data: DATA}};
	expect(messages(undefined, action)).to.eql(DATA);
})
