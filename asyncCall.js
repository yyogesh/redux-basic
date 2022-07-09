const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const axios = require('axios');
const thunkMiddleWare = require('redux-thunk').default;


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'


const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const successUserRequest = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const failureUserRequest = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.error
            }
    }
}

const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(successUserRequest(response.data));
            })
            .catch(error => {
                dispatch(successUserRequest(error.message));
            })
    }
}

const store = createStore(reducer, redux.applyMiddleware(logger, thunkMiddleWare));
store.dispatch(fetchUser());