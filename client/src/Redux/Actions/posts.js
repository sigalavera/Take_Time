import { AUTH } from "../constans/actionTypes";
import * as api from "../../api/index";

export const getAllPosts = () => async (dispatch) => {
    try {
        const { cases } = await api.getAllCases();
        dispatch({ type: GET_CASES, data: cases });
    } catch (error) {
        console.log(error);
    }
};