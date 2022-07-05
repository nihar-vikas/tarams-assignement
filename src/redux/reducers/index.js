import { combineReducers } from 'redux';
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
    projectsList: projectReducer,
});

export default rootReducer;