import React, { useEffect, useState } from 'react'
import { Post } from '../../components/post'

export const Feed = () => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    
    getPosts()
  }, [])

  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data)
  }

  const fetchPosts = async () => {
    const data = await fetch("https://blogapi-mqr3.onrender.com/post")
    const json = await data.json()
    console.log(json)
    return json
  }

  const sendPost = () => {
    const { value } = document.querySelector("#post-input")
    
    let body = {
        authorId: "joao",
        text: value
    }

    fetch("https://blogapi-mqr3.onrender.com/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
  }

  return (
    <div>
      <div>

        <input id="post-input" /> 
        <button onClick={() => sendPost()} />
      </div>

        {
          posts?.map(data => (<Post data={data} />))
        }
    </div>
  )
}
