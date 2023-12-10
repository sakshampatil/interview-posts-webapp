import Navbar from "@/components/Navbar";
import { Fragment, useEffect, useState } from "react";
import { useListPostsQuery } from "@/store/services/postsApi";
import PostsList from "@/components/Posts/PostsList";

export default function Home() {
  const [isComments, setIsComments] = useState(false);
  const [search, setSearch] = useState("");

  const { data: posts, isLoading } = useListPostsQuery(search);

  useEffect(() => {
    if (isComments) {
    } else {
      console.log("POSTS = ", posts);
    }
  }, [isComments, search]);

  return (
    <Fragment>
      <Navbar onChangeSearch={setSearch} searchVal={search} />
      <div className="my-6">
        <PostsList search={search} />
      </div>
    </Fragment>
  );
}
