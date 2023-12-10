import { useEffect } from "react";
import { useGetPostByIdQuery } from "@/store/services/postsApi";
import { Card, CardHeader, CardBody, Textarea } from "@nextui-org/react";

const ViewPost = ({ postId }) => {
  console.log("POSss = ", postId);
  const { data: post, isLoading } = useGetPostByIdQuery(postId);

  return (
    <div className="flex justify-center items-center min-h-full mt-6">
      <Card className="dark w-1/2 ">
        <CardHeader>
          <h1 className="text-xl font-semibold text-blue-600">{post?.data?.authorName}</h1>
        </CardHeader>
        <CardBody>
          <Textarea value={post?.data?.content} minRows={10} isReadOnly={true} />
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewPost;
