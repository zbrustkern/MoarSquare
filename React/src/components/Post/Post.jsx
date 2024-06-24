const Post = (props) => {

    return (
        <div className="post-box">
            <div className="post-edit-buttons">
            <>
                <h3>{props.post.id}</h3>
                <button onClick={() => props.handleEditPost(props.post.id)}>🔧</button>
                <button onClick={() => props.handleDeletePost(props.post.id)}>🗑️</button>
            </>
            </div>
            <h4>{props.post.location}</h4>
            <h3>{props.post.text}</h3>
            <div className="comment-section">
                <ul>
                {props.post.comments.map((comment) => (
                    <li key={comment.comment_id}>
                        <div>
                            {comment.comment_author_username} said:
                        </div>
                        <div>
                            {comment.comment_text}
                        </div>
                    </li>
                )
                )}
            </ul>
            <div className="new-comment-box">
                <h3>Leave a new comment...</h3>
            </div>
            </div>
        </div>
    )
}

export default Post