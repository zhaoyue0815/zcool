import axios from 'axios'

export const RESULT_OK = 0

export function reqPlace() {
  return axios.get('/api/place')
}

export function reqMain() {
  return axios.get('/api/main')
}
