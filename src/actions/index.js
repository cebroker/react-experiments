import axios from 'axios';

const API_URL = '/api/v1'

export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages() {
	const request = axios.get(`${API_URL}/messages`);

	return {
		type: FETCH_MESSAGES,
		payload: request
	}
} 
