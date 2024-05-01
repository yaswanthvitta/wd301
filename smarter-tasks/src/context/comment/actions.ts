import { API_ENDPOINT } from "../../config/constants";
import {
  CommentAvailableAction,
  CommentDispatch,
} from "./types";


export const fetchComments = async (dispatch: CommentDispatch,
    projectId: string,
    taskId: string) => {
  const token = localStorage.getItem("authToken") ?? ""; 
  try {
    dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(`${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS, payload: data });
  } catch (error) {
    console.log('Error fetching projects:', error);
    dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_FAILURE, payload: 'Unable to load projects' });
  }
};

export const addComments = async (
    dispatch: CommentDispatch,
    projectId: string,
    taskId:string,
    comment: any,
  ) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {
      dispatch({ type: CommentAvailableAction.CREATE_COMMENTS_REQUEST });
      const response = await fetch(
        `${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(comment),
        }
      );

      const data = await response.json();
  
      if (!response.ok) {
        throw new Error("Failed to create task");
      }
      dispatch({ type: CommentAvailableAction.CREATE_COMMENTS_SUCCESS ,payload: data });
      refreshComments(dispatch, projectId,taskId);
    } catch (error) {
      console.error("Operation failed:", error);
      dispatch({
        type: CommentAvailableAction.CREATE_COMMENTS_FAILURE,
        payload: "Unable to create task",
      });
    }
  };
  
  
  export const refreshComments = async (
    dispatch: CommentDispatch,
    projectId: string,
    taskId:string,
  ) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {
      dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_REQUEST });
      const response = await fetch(
        `${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
  
      // extract the response body as JSON data
      const data = await response.json();
      dispatch({
        type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS,
        payload: data,
      });
      console.dir(data);
    } catch (error) {
      console.error("Operation failed:", error);
      dispatch({
        type: CommentAvailableAction.FETCH_COMMENTS_FAILURE,
        payload: "Unable to load tasks",
      });
    }
  };