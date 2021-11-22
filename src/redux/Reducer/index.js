import {combineReducers} from 'redux'
import userReducer from './userReducder';
import todoReducer from '../rootReducer/todoReducer';
import postsReducer from '../rootReducer/postsReducer';
import commentsReducer from '../rootReducer/commetReducer';

const  reducer=combineReducers({
    userReducer,
    todoReducer,
    postsReducer,
    commentsReducer

})

export default reducer;