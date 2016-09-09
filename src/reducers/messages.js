import { FETCH_MESSAGES } from '../actions';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_MESSAGES:
			return [...state, ...action.payload.data]
		default:
			return state;
	}
} 