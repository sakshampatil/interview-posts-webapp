import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { Fragment, useEffect } from "react";
import ViewPost from "@/components/Posts/ViewPost";
import AddComment from "@/components/comments/AddComment";

export default function Page() {
  const router = useRouter();

  console.log("POS = ", router.query.id);
  return (
    <Fragment>
      <Navbar />
      {router.query.id && <ViewPost postId={router.query.id} />}
      <AddComment postId={router.query.id} />
    </Fragment>
  );
}
