import Post from '../Post/Post';


const PostList = (props) => {

    if (!props.posts) return (
        <>
        Loading...
        </>
    )

    return (
        <div className = "post-list">
            <h1>Post List</h1>
            <ul>
            {props.posts.map((post) => (
                <li key={post.id}>
                    <div>
                        <Post post={post} handleDeletePost={props.handleDeletePost} user={props.user} togglePostFormDisplay={props.togglePostFormDisplay}/>
                    </div>
                </li>
            )
            )}
            </ul>
        </div>
    )
}

export default PostList