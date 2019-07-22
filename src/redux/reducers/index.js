import { combineReducers } from 'redux';
import auth from './auth';
import userInfo from './user_info';
import miner from './miner'

export default combineReducers({
    auth,
    userInfo,
    miner
})