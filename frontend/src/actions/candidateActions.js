import axios from 'axios';
import { CANDIDATE_LIST_FAIL, CANDIDATE_LIST_REQUEST, CANDIDATE_LIST_SUCCESS } from "../constants/candidateConstants"

export const listCandidates = () => async (dispatch) => {
    dispatch({ type: CANDIDATE_LIST_REQUEST });
    try {
        const { data } = await axios.get('/api/candidates');
        dispatch({ type: CANDIDATE_LIST_SUCCESS, payload: data[0] });
    } catch (error) {
        dispatch({ type: CANDIDATE_LIST_FAIL, payload: error.message });
    }
};