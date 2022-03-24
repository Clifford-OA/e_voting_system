import { CANDIDATE_LIST_FAIL, CANDIDATE_LIST_REQUEST, CANDIDATE_LIST_SUCCESS, UPDATE_VOTE_COUNT_FAIL, UPDATE_VOTE_COUNT_REQUEST, UPDATE_VOTE_COUNT_SUCCESS } from "../constants/candidateConstants";

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


export const updateVoteCountReducer = (state = { loading: true}, action) => {
    switch (action.type) {
        case UPDATE_VOTE_COUNT_REQUEST:
            return { loading: true };
        case UPDATE_VOTE_COUNT_SUCCESS:
            return { loading: false, success: true};
        case UPDATE_VOTE_COUNT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}