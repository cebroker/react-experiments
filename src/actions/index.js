import axios from 'axios';

export const FETCH_PROVIDER = 'FETCH_PROVIDER';

const ROOT_URL = 'http://test.api.cebroker.com/v2';

export function fetchProvider(id = 1) {
  const request = axios.get(`${ROOT_URL}/providers/${id}`);

  return {
    type: FETCH_PROVIDER,
    payload: request
  }
}
