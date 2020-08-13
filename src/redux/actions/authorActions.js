import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as authorApi from "../../api/authorApi";

export function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return authorApi.getAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors))
        }).catch(error => {
            dispatch(apiCallError(error));
            throw error;
        });
    }
}