import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { Fragment, useEffect } from "react";
import ViewPost from "@/components/Posts/ViewPost";
import AddComment from "@/components/comments/AddComment";
import { useGetAllCommentsForPostQuery } from "@/store/services/commentsApi";
import Comment from "@/components/comments/Comment";

export default function Page() {
  const router = useRouter();
  const { data, isLoading } = useGetAllCommentsForPostQuery(router.query.id);

  console.log("POS = ", router.query.id);
  return (
    <Fragment>
      <Navbar />
      {router.query.id && <ViewPost postId={router.query.id} />}
      <AddComment postId={router.query.id} />
      <div>{data && data.data.map((ele) => <Comment key={ele._id} comment={ele} />)}</div>
    </Fragment>
  );
}
