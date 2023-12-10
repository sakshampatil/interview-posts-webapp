import Navbar from "@/components/Navbar";
import { Fragment, useEffect, useState } from "react";
import { useListPostsQuery } from "@/store/services/postsApi";
import { useAppDispatch } from "@/store/hooks";

export default function Home() {
  const dispatch = useAppDispatch();

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
      <div></div>
    </Fragment>
  );
}
