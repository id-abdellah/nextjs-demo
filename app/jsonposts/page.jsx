import Link from "next/link";

export default async function page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const postsJSX = posts.map(post => {
        return (
            <Link href={`jsonposts/${post.id}`} style={{
                color: "white",
                backgroundColor: "black",
                display: "block",
                padding: "10px",
                marginTop: "10px",
                width: "70%"
            }}>
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </Link>
        )
    });

    return (
        <div className="json-posts" >
            <h1>Json posts for practice</h1>

            <div className="posts" style={{
                display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
            }}>
                {postsJSX}
            </div>
        </div>
    )
}
