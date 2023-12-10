import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

const NoPosts = () => {
  const router = useRouter();

  return (
    <div className="text-center w-full">
      <p className="mb-3">There are no posts matching your search. Why not create one?</p>
      <Button
        onClick={() => router.push("posts/createPost")}
        className="text-white font-semibold bg-blue-600"
      >
        Create Post
      </Button>
    </div>
  );
};

export default NoPosts;
