// SHOP
// SHOPKEEPER
// CUSTOMER 


// shop ==> store   

{
    cake: 10
}

// BUY_SELL ==> Action 

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action',
        numOfCakes: 2
    }
}

function getInfo() {
    return {
        type: 'GET_INFO',
        payload: 'First redux action'
    }
}

// shopkeepr ==> Reducer

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: {
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.numOfCakes
            }
        }
        case 'GET_INFO': {
            return state
        }
        default:
            return state;
    }
}

// getState(), dispatch(action), subscribe(listener), unsubscribe(listener)

const store = createStore;

State:

state = {
    loading: true,
    data: [],
    error: ''
}

Action:

FETCH_USER_REQUEST
FETCH_USER_SUCCESS
FETCH_USER_FAILURE


Reducers: 

case: FETCH_USER_REQUEST
loading: true;
case : FETCH_USER_SUCCESS
loading: false;
data: user data applyMiddleware;
case FETCH_USER_FAILURE
   loading false;
error: api error