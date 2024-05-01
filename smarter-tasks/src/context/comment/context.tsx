import React, { createContext, useContext, useReducer } from "react";
import { commentReducer, initialState } from "./reducer";
import { CommentState, CommentDispatch } from "./types";
const CommentStateContext = createContext<CommentState>(initialState);
const CommentDispatchContext = createContext<CommentDispatch>(() => {});
export const CommentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  
  const [state, dispatch] = useReducer(commentReducer, initialState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};

// Create helper hooks to extract the `state` and `dispacth` out of the context.
export const useCommentState = () => useContext(CommentStateContext);
export const useCommentDispatch = () => useContext(CommentDispatchContext);