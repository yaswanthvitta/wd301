import { SubmitHandler, useForm } from "react-hook-form";
import { CommentDetailsPayload } from "../../context/comment/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addComments, fetchComments } from "../../context/comment/actions";
import { useCommentDispatch } from "../../context/comment/context";

const NewComment = () => {
  const [, setIsOpen] = useState(true);

  const { projectID, taskID } = useParams();
  const navigate = useNavigate();
  const commentDispatch = useCommentDispatch();
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-empty-pattern
    formState: {},
  } = useForm<CommentDetailsPayload>({});

  useEffect(() => {
    if (taskID && projectID) fetchComments(commentDispatch, projectID, taskID);
  }, [commentDispatch, projectID, taskID]);
  function closeModal() {
    setIsOpen(false);
    navigate("../../");
  }

  const handleAddComment: SubmitHandler<CommentDetailsPayload> = async (formData) => {
    try {
      const currentMemberString = localStorage.getItem("userData");
      if (!currentMemberString) {
        console.error("User data not found in local storage.");
        return;
      }
      const currentMember = JSON.parse(currentMemberString);
      console.log(formData.comment);
      if (currentMember.name) {
        const comment = {
          description: formData.comment,
          user: currentMember.name.toString(),
          time: new Date().toISOString(),
        };
        console.log(comment);
        if (projectID && taskID) {
          addComments(commentDispatch, projectID, taskID, comment);
        }
      }
    } catch (error) {
      console.log("Operation failed", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleAddComment)} className="mt-4">
        <input
          type="text"
          id="commentBox"
          {...register("comment")}
          placeholder="Add a comment..."
          className="w-full border rounded-md py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
        <button
          type="submit"
          id="addCommentBtn"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Add Comment
        </button>
        <button
          onClick={closeModal}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 mx-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default NewComment;