import { useState } from "react";
import { Post } from "../../components/Post";
import { useQuery } from "@tanstack/react-query";
import postService from "../../services/postService";
import styles from './styles.module.css'

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  const handleGetPosts = async () => {
    const res = await postService.findAll();
    setPosts(res);
  };

  const postsQuery = useQuery({
    queryKey: ["getPosts"],
    queryFn: handleGetPosts,
  });

  return (
    <div className={styles.container}>
      {posts?.map((data) => (
        <Post key={data?.id} data={data} />
      ))}
    </div>
  );
};
