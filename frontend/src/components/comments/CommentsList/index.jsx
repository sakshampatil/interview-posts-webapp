import React, { Fragment } from "react";
import { useListCommentsQuery } from "@/store/services/commentsApi";
import Comment from "../Comment";

const CommentsList = ({ search }) => {
  const { data: comments, isLoading } = useListCommentsQuery(search);

  return (
    <Fragment>
      {comments && comments?.data.map((ele) => <Comment key={ele._id} comment={ele} />)}
    </Fragment>
  );
};

export default CommentsList;
