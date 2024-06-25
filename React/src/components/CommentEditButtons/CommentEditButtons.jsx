const CommentEditButtons = (props) => {
    return (
    <div className="comment-edit-buttons">
        <>
            {/* <button onClick={() => props.togglePostFormDisplay(props.post)}>🔧</button> */}
            <button onClick={() => props.handleDeleteComment(props.post.id, props.comment.comment_id)}>🗑️</button>
        </>
        </div>
    )
}

export default CommentEditButtons