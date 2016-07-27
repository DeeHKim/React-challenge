import Axios from 'axios'

export const SEARCH = 'SEARCH'
export const SEARCHSITTING = 'SEARCHSITTING'
export const SEARCHBOARDING = 'SEARCHBOARDING'

const ROOT_URL = "http://localhost:3000/static"

export function searchList () {
  const request = Axios.get(`${ROOT_URL}/search.json`)
  return {
    type: SEARCH,
    payload: request
  }
}

export function searchSitting () {
  const request = Axios.get(`${ROOT_URL}/search.json?service=sitting`)
  return {
    type: SEARCHSITTING,
    payload: request
  }
}

export function searchBoarding () {
  const request = Axios.get(`${ROOT_URL}/search.json?service=boarding`)
  return {
    type: SEARCHBOARDING,
    payload: request
  }
}
