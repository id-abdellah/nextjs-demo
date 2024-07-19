export const metadata = {
    title: "posts",
    description: "posts goes here",
};

export default function ({ children }) {
    return (
        <div className="posts-wrapper">
            <div>{children}</div>
            <h1>posts Layout.js</h1>
        </div>
    )
}