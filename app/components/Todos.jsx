"use client"

import { useEffect, useState } from "react"

export default function Todos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://jsonplaceholder.typicode.com/todos");
            let todos = (await response.json()).slice(0, 15);
            setTodos(todos)
        }
        fetchData()
    }, [])

    return (
        <div>
            <ul>
                {
                    todos.map(x => {
                        return <li key={x.id}>{x.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
