import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useCreateCommentMutation } from "@/store/services/commentsApi";

import { Card, CardHeader, CardBody, CardFooter, Textarea, Button } from "@nextui-org/react";

const AddComment = ({ postId }) => {
  const [createComment, { isSuccess }] = useCreateCommentMutation();
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  const commentorName = useAppSelector((state) => state.auth.user.userName);

  const handleContentChange = (e) => {
    setContentError("");
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    if (content === "") {
      setContentError("Content cannot be empty");
      return;
    }

    let body = {
      postId: postId,
      commentorName: commentorName,
      commentText: content,
    };
    createComment(body);
    setContent("");
    window.location.reload();
  };

  return (
    <div className="flex justify-center mt-1">
      <Card className="dark w-1/2">
        <CardBody>
          <Textarea
            value={content}
            onChange={handleContentChange}
            errorMessage={contentError}
            isInvalid={contentError === "" ? false : true}
            placeholder="Type your comment..."
            minRows={3}
          ></Textarea>
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSubmit} className="bg-blue-600">
            Add Comment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddComment;
