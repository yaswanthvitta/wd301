import { ReactNode } from "react";

export type CommentDispatch = React.Dispatch<CommentActions>;

export type Comment = {
    User: any;
    id: number;
    comment: string;
    user: string;
    time: DOMHighResTimeStamp;
    createdAt: ReactNode;
    description: ReactNode;
  };

  export type CommentDetailsPayload = Omit<Comment,  "id" | "createdAt" | "user" | "task_id">;

  export interface CommentState {
    comments: Comment[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }

  export enum CommentAvailableAction {
    FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

    CREATE_COMMENTS_REQUEST = "CREATE_COMMENTS_REQUEST",
    CREATE_COMMENTS_SUCCESS = "CREATE_COMMENTS_SUCCESS",
    CREATE_COMMENTS_FAILURE = "CREATE_COMMENTS_FAILURE",
  }

  export type CommentActions =
  | { type: CommentAvailableAction.FETCH_COMMENTS_REQUEST }
  | { type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS; payload: Comment[] }
  | { type: CommentAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentAvailableAction.CREATE_COMMENTS_REQUEST }
  | { type: CommentAvailableAction.CREATE_COMMENTS_SUCCESS;payload: Comment }
  | { type: CommentAvailableAction.CREATE_COMMENTS_FAILURE; payload: string }