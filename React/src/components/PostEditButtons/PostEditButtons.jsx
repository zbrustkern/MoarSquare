
const PostEditButtons = (props) => {
    return (
    <div className="post-edit-buttons">
        <>
            <button onClick={() => props.handleEditPost(props.postId)}>🔧</button>
            <button onClick={() => props.handleDeletePost(props.postId)}>🗑️</button>
        </>
        </div>
    )
}

export default PostEditButtons