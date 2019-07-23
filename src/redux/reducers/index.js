import { combineReducers } from 'redux'
import auth from './auth'
import userInfo from './user_info'
import miner from './miner'
import items from './items'

export default combineReducers({
    auth,
    userInfo,
    miner,
    items
})