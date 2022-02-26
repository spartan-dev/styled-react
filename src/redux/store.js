import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
//los Ducks!!!! (action action.type reducer)
import user from './UserDucks'

export const rootReducer = combineReducers({
    //products,
    user,
    //cart
    //order
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))// esta es nueva!!
)


export default store;