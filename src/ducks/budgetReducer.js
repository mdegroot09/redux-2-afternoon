import axios from "axios";

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'
const ADD_PURCHASE = 'ADD_PURCHASE'

export const requestBudgetData = () => {
  let data = axios.get('/auth/budget-data').then(res => res.data)
  return {
    type: REQUEST_USER_DATA,
    payload: data
  }
}

let initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
}

function reducer(state = initialState, action){
  switch (action.payload){
    case REQUEST_BUDGET_DATA + '_PENDING':
      return { ...state, loading: true }
    case REQUEST_BUDGET_DATA + '_FULFILLED':
      return { ...state, ...action.payload, loading: false }
    default:
      return state
  }
}

export default reducer;