import { TIPS } from "../shared/tips";
import * as ActionTypes from "./ActionTypes";

export const Tips = (state = TIPS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TIP:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      console.log("adding new tip:", comment);
      return state.concat(comment);
    default:
      return state;
  }
};
