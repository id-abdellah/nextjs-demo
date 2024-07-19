export default async function PostsPage() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let todos = (await response.json()).slice(0, 15);
    console.log(todos)
    return (
        <div>
            <h2>Posts Page content goes here</h2>
            <h4>Todos from an api (server component)</h4>
            <ul>
                {todos.map(x => {
                    return <li key={x.id}>{x.title}</li>
                })}
            </ul>
        </div>
    )
}