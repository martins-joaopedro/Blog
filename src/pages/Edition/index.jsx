import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import postService from "../../services/postService";
import styles from "./styles.module.css";

export const Edition = () => {
  const [text, setText] = useState("");

  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationKey: ["createPost"],
    mutationFn: postService.create,
    onMutate: () => queryClient.invalidateQueries({ queryKey: ["getPosts"] }),
  });

  return (
    <div className={styles.container}>
      Edition
      <div className={styles.card}>
        <input
          id="post-input"
          onChange={({ target }) => setText(target.value)}
        />
        <button onClick={() => createPostMutation.mutate({ text })}>
          enviar
        </button>
      </div>
    </div>
  );
};
