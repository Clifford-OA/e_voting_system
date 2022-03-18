import { CANDIDATE_LIST_FAIL, CANDIDATE_LIST_REQUEST, CANDIDATE_LIST_SUCCESS } from "../constants/candidateConstants";

export const candidateListReducer = (state = { loading: true, candidates: [] }, action) => {
    switch (action.type) {
        case CANDIDATE_LIST_REQUEST:
            return { loading: true };
        case CANDIDATE_LIST_SUCCESS:
            return { loading: false, candidates: action.payload };
        case CANDIDATE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};