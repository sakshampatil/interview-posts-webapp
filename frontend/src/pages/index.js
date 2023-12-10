import Navbar from "@/components/Navbar";
import { Fragment, useEffect, useState } from "react";
import { useListPostsQuery } from "@/store/services/postsApi";
import PostsList from "@/components/Posts/PostsList";
import CommentsList from "@/components/comments/CommentsList";

export default function Home() {
  const [isComments, setIsComments] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("isComm = ", isComments);
  }, [isComments]);

  const onChangeDropdown = (val) => {
    setIsComments(val);
  };

  return (
    <Fragment>
      <Navbar onChangeSearch={setSearch} onChangeDropdown={onChangeDropdown} searchVal={search} />
      <div className="my-6">
        {isComments ? <CommentsList search={search} /> : <PostsList search={search} />}
      </div>
    </Fragment>
  );
}
