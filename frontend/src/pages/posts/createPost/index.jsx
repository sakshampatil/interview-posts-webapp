import Navbar from "@/components/Navbar";
import React, { Fragment, useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Textarea, CardFooter, Button } from "@nextui-org/react";
import { useCreatePostMutation } from "@/store/services/postsApi";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";

const CreatePost = () => {
  const [createPost, { isSuccess }] = useCreatePostMutation();
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");
  const router = useRouter();

  const authorName = useAppSelector((state) => state.auth.user.userName);

  const handleContentChange = (e) => {
    setContentError("");
    setContent(e.target.value);
  };

  useEffect(() => {
    if (isSuccess) {
      router.back();
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    if (content === "") {
      setContentError("Content cannot be empty");
      return;
    }

    let body = {
      authorName: authorName,
      content: content,
    };
    createPost(body);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-center items-center min-h-full mt-32">
        <Card className="dark w-1/2 ">
          <CardHeader>
            <h1 className="text-xl font-semibold">Create Post</h1>
          </CardHeader>
          <CardBody>
            <Textarea
              value={content}
              onChange={handleContentChange}
              className=""
              minRows={10}
              placeholder="Enter your content... "
              errorMessage={contentError}
              isInvalid={contentError === "" ? false : true}
            />
          </CardBody>
          <CardFooter>
            <div className="flex w-full justify-end ">
              <Button
                onClick={handleSubmit}
                className={`${isSuccess ? `bg-green-600` : `bg-blue-600`} font-semibold text-lg`}
              >
                Create
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Fragment>
  );
};

export default CreatePost;
