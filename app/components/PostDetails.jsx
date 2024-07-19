import React from 'react'

export default async function PostDetails({ jsonpostId }) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1500);
    })

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + jsonpostId);
    const post = await response.json();
    return (
        <div style={{
            color: "white",
            backgroundColor: "black",
            display: "block",
            padding: "10px",
            marginTop: "10px",
            width: "70%"
        }}>
            <h4>{post.title}</h4>
            <div>{post.body}</div>
        </div>
    )
}
