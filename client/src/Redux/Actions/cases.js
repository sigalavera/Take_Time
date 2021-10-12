import { GET_CASES } from "./types"
import * as api from "../../api"

export const getAllCases = () => async (dispatch) => {
    try {
        const { data } = await api.getAllCases();
        console.log(data);
        dispatch({ type: GET_CASES, payload: data.cases });
    } catch (error) {
        console.log(error);
    }
};