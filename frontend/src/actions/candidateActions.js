import axios from 'axios';
import { CANDIDATE_LIST_FAIL, CANDIDATE_LIST_REQUEST, CANDIDATE_LIST_SUCCESS, UPDATE_VOTE_COUNT_FAIL, UPDATE_VOTE_COUNT_REQUEST, UPDATE_VOTE_COUNT_SUCCESS } from "../constants/candidateConstants"

export const listCandidates = (cand_id) => async (dispatch) => {
    dispatch({ type: CANDIDATE_LIST_REQUEST, payload: cand_id });
    try {
        const { data } = await axios.get(`/api/candidates/${cand_id}`);
        dispatch({ type: CANDIDATE_LIST_SUCCESS, payload: data.candidates });
    } catch (error) {
        dispatch({ type: CANDIDATE_LIST_FAIL, payload: error.message });
    }
};


export const updateVoteCount = (votingId, voteIds) => async (dispatch) => {
    dispatch({ type: UPDATE_VOTE_COUNT_REQUEST, payload: votingId });
    try {
        const { data } = await axios.put(`/api/candidates/${votingId}`, { 'voteIds': voteIds });
        dispatch({ type: UPDATE_VOTE_COUNT_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: UPDATE_VOTE_COUNT_FAIL, error: message });
    }
};