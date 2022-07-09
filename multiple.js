const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action',
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action',
    }
}

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCream: 20
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: {
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        }
        default:
            return state;
    }
}
const iceCreameReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM': {
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        }
        default:
            return state;
    }
}
// getState(), dispatch(action), subscribe(listener), unsubscribe(listener)
const reducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreameReducer
})
const store = createStore(reducer, redux.applyMiddleware(logger));
console.log('Intial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
unsubscribe();