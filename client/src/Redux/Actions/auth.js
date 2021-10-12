import { AUTH } from "../constans/actionTypes";
import * as api from "../../api/index";

export const signin = (userData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userData);

    dispatch({ type: AUTH, data:data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
