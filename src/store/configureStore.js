import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer";
import generateId from "store/middlewares/generateId";

const middleware = [generateId];

export default function store() {
  return configureStore({reducer, middleware});
}
