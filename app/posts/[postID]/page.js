import React from 'react'

export default function PostID(props) {
    console.log(props)
    return (
        <div>
            <h2>A choosen post here == {props.params.postID}</h2>
            <pre>
                {
                    JSON.stringify(props.searchParams)
                }
                <br></br>
                <br></br>
                {
                    JSON.stringify(props.params)
                }
            </pre>
        </div>
    )
}
