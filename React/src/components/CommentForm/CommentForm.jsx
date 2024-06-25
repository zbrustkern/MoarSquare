import { useState } from 'react';

const CommentForm = (props) => {
    const emptyForm = {
        text: '',
    }

    const [formData, setFormData] = useState(emptyForm);
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    // useEffect(() => {
    //     const fillForm = () => {
    //         setFormData({
    //             text: props.comment.comment_text
    //           })
    //     }
    //     if (props.comment) fillForm();
    // }, [props.comment])


    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.comment ? props.handleEditComment(props.post.id, props.comment.comment_id, formData) : props.handleNewComment(props.post.id, formData)
        setFormData(emptyForm);
    };

    return (
        <div className='comment-form'>
        <form onSubmit={handleSubmit}>
        <h3>{props.comment? 'Edit Comment' : 'New Comment'}</h3>
                <label htmlFor="text-input">Comment:</label>
                <input
                    required
                    type="text"
                    name="text"
                    id="text-input"
                    value={formData.text}
                    onChange={handleChange}
                /><span>     </span>
                <button type="submit">{props.comment ? 'Submit Changes' : 'Add Comment'}</button>
        </form>
        </div>
    )
}

export default CommentForm