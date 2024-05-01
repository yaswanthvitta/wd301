import { Reducer } from "react";
import { CommentAvailableAction, CommentActions } from "./types";
// Define the initial state
import {  CommentState } from "./types";

// Define the initial state
export const initialState: CommentState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentState, CommentActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    // Update reducer to handle the actions dispatched on fetching tasks.
    case CommentAvailableAction.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentAvailableAction.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, comments: action.payload };
    case CommentAvailableAction.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

      
    case CommentAvailableAction.CREATE_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentAvailableAction.CREATE_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, comments: [action.payload, ...state.comments], };
    case CommentAvailableAction.CREATE_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
      
    default:
      return state;
  }
};