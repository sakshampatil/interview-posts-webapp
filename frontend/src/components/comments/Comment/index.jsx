import React from "react";
import { Card, CardHeader, CardBody, user } from "@nextui-org/react";
import { useRouter } from "next/router";

const Comment = ({ comment }) => {
  const router = useRouter();

  return (
    <div className="flex  justify-center dark my-4 ">
      <Card
        isPressable
        className="w-1/2"
        onPress={() => router.push(`posts/viewPost/${comment.postId}`)}
      >
        <CardHeader className="text-blue-600 ">
          <div>{comment.commentorName}</div>
        </CardHeader>
        <CardBody className="bg-custom-black mx-3 w-auto rounded-md my-2">
          <p>{comment.commentText}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Comment;
