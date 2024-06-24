const PostList = (props) => {
    console.log(props.posts)
    return (
        <div className = "post-list">
            <h1>Post List</h1>
            <ul>
            {props.posts.posts.map((post) => (
                <li key={post.id}>
                    <div>
                        <h2>{post.text}</h2>
                    </div>
                </li>
            )
            )}
            </ul>
        </div>
    )
}

export default PostList