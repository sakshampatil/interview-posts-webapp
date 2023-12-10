import React, { Fragment } from "react";
import { useListPostsQuery } from "@/store/services/postsApi";
import Post from "../Post";
import NoPosts from "../NoPosts";

const PostsList = ({ search }) => {
  const { data: posts, isLoading } = useListPostsQuery(search);

  return (
    <Fragment>
      {posts && posts.data.length > 0 ? (
        posts?.data.map((ele) => <Post key={ele._id} post={ele} />)
      ) : (
        <NoPosts />
      )}
    </Fragment>
  );
};

export default PostsList;
