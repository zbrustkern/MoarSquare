import {useState, } from 'react'
import PostEditButtons from "../PostEditButtons/PostEditButtons"
import CommentEditButtons from '../CommentEditButtons/CommentEditButtons';
import MapBoxMap from "../MapBoxMap/MapBoxMap"
import CommentForm from "../CommentForm/CommentForm";
import * as postService from '../../services/postService';


const Post = (props) => {

    const [comments, setComments] = useState(props.post.comments)

    const handleNewComment = async (postId, commentFormData) => {
        const newComment = await postService.createComment(postId, commentFormData);
        newComment.comment_author_username = props.user.username
        newComment.comment_id = newComment.id
        newComment.comment_text = newComment.text
        setComments([...comments, newComment])
      }
    
    const handleDeleteComment = async (postId, commentId) => {
        console.log('post id: ' + postId)
        console.log('comment id: ' + commentId)
        // await postService.deleteComment(postId, commentId);
        // setComments(comments.filter((comment) => comment.comment_id !== commentId));
    }
      
    //   const handleEditPost = async (postId, postFormData) => {
    //     const editedPost = await postService.updatePost(postId, postFormData)
    //     editedPost.post.post_author_id = user.id
    //     setPosts([... posts, editedPost.post])
    //     togglePostFormDisplay()
    //   }


    return (
        <div className="post-box">
            {props.post.post_author_id == props.user.id && <PostEditButtons handleDeletePost={props.handleDeletePost}  post={props.post} togglePostFormDisplay={props.togglePostFormDisplay}/>}
            <h4>{props.post.location}</h4>
            <MapBoxMap location={props.post.location} />
            <h3>{props.post.text}</h3>
            <div className="comment-section">
                <ul>
                {comments?.map((comment) => (
                    <li key={comment.comment_id}>
                        <div>
                            {comment.comment_author_username} said:
                        </div>
                        <div className='comment-edit-buttons'>
                            {comment.comment_text}
                            {comment.comment_author_username == props.user.username && <CommentEditButtons handleDeleteComment={handleDeleteComment} comment={comment} post={props.post}/>}
                        </div>
                    </li>
                )
                )}
            </ul>
            <div className="new-comment-box">
                <CommentForm handleNewComment={handleNewComment} post={props.post}/>
            </div>
            </div>
        </div>
    )
}

export default Post