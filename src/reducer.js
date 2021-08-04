import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './features/User/UserSlice';

const reducer = {
  user: userReducer
}

export default combineReducers(reducer)
