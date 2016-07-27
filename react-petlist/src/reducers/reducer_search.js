import Axios from 'axios'
import { SEARCH, SEARCHSITTING, SEARCHBOARDING } from '../actions/searchActions'

const INITIAL_STATE = {searchList: []}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH:
      return {...state, searchList: action.payload.data.search}
    case SEARCHSITTING:
      return {...state, searchList: action.payload.data.search}
    case SEARCHBOARDING:
      return {...state, searchList: action.payload.data.search}
    default:
      return state
  }
}
