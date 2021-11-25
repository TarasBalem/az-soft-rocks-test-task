import {generate as id} from "shortid";

// eslint-disable-next-line import/no-anonymous-default-export
export default store => next => action => {
  if (action.type && action.type.indexOf("addContact") !== -1) {
    action = {...action, payload: {...action.payload, id: id()}};
  }
  next(action);
};
