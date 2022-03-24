import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { candidateListReducer, updateVoteCountReducer } from './reducers/candidateReducers';

const initialState = {};
const reducer = combineReducers({
    candidateList: candidateListReducer,
    updateVotes: updateVoteCountReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;