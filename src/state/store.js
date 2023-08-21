import {applyMiddleware} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import reducers from "./reducers/index"
import thunk from "redux-thunk"

export const store= createStore(reducers,{},applyMiddleware(thunk))