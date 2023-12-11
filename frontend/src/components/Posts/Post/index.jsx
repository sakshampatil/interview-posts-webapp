import React from "react";
import { Card, CardHeader, CardBody, user } from "@nextui-org/react";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  return (
    <div className="flex  justify-center dark my-4 ">
      <Card isPressable className="w-1/2" onPress={() => router.push(`posts/viewPost/${post._id}`)}>
        <CardHeader className="text-blue-600 ">
          <div>{post.authorName}</div>
        </CardHeader>
        <CardBody className="bg-custom-black w-full mr-3  rounded-md my-2 ">
          <p>{post.content}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
