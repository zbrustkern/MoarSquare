// import { useState } from 'react'
import PostEditButtons from "../PostEditButtons/PostEditButtons"
import CommentEditButtons from '../CommentEditButtons/CommentEditButtons';
import MapBoxMap from "../MapBoxMap/MapBoxMap"
import CommentForm from "../CommentForm/CommentForm";
import * as postService from '../../services/postService';


const Post = (props) => {

    const handleNewComment = async (postId, commentFormData) => {
        const newComment = await postService.createComment(postId, commentFormData);
        newComment.comment_author_username = props.user.username
        newComment.comment_id = newComment.id
        newComment.comment_text = newComment.text

        const newPosts = props.posts.filter((oldPost) => oldPost.id !== props.post.id)
        const newPost = ({...props.post, comments: [...props.post.comments, newComment]})

        props.setPosts({ ...newPosts, newPost})
      }
    
    const handleDeleteComment = async (postId, commentId) => {
        console.log('post id: ' + postId)
        console.log('comment id: ' + commentId)
        await postService.deleteComment(postId, commentId);
        // need to make disappear
    }
      
    //   const handleEditPost = async (postId, postFormData) => {
    //     const editedPost = await postService.updatePost(postId, postFormData)
    //     editedPost.post.post_author_id = user.id
    //     setPosts([... posts, editedPost.post])
    //     togglePostFormDisplay()
    //   }


    return (
        <div className="post-box">
            
            <h2>{props.post.author_username}</h2>
            <div className='post-content'>
            <h3>{props.post.text}</h3>
            {props.post.post_author_id == props.user.id && <PostEditButtons handleDeletePost={props.handleDeletePost}  post={props.post} togglePostFormDisplay={props.togglePostFormDisplay}/>}
            </div>
            <MapBoxMap location={props.post.location} />
            <hr />
            <br />
            <div className="comment-section">
                <ul>
                {props.post.comments?.map((comment) => (
                    <li key={comment.comment_id}>
                        <div className='comment-content'>
                            <div>
                                {comment.comment_author_username} said: {comment.comment_text}
                            </div>
                            <div className='comment-edit-buttons'>
                                {comment.comment_author_username == props.user.username && <CommentEditButtons handleDeleteComment={handleDeleteComment} comment={comment} post={props.post}/>}
                            </div>
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