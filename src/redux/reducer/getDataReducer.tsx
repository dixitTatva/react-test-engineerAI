import { GET_DATA } from "../constant/actionType";

const intialState = {
  data: [],
};

export const getDataReducer = (state: any = intialState, action: any) => {
  switch (action.type) {
    case GET_DATA:
      return state;
    default:
      return state;
  }
};

export default {
    getDataReducer
}