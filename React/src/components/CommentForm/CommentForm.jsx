import { useState, useEffect } from 'react';

const CommentForm = (props) => {
    const emptyForm = {
        text: '',
    }

    const [formData, setFormData] = useState(emptyForm);
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    useEffect(() => {
        const fillForm = () => {
            setFormData({
                text: props.comment.comment_text
              })
        }
        if (props.comment.comment_id) fillForm();
    }, [props.comment])


const handleSubmit = (evt) => {
    evt.preventDefault();
    props.comment.comment_id ? props.handleEditComment(props.post.id, props.comment.comment_id, formData) : props.handleNewComment(formData)
    setFormData(emptyForm);
};

return (
    <div className='comment-form'>
    <form onSubmit={handleSubmit}>
    <h3>{props.post? 'Edit Comment' : 'New Comment'}</h3>
            <label htmlFor="text-input">Comment:</label>
            <input
                required
                type="text"
                name="text"
                id="text-input"
                value={formData.text}
                onChange={handleChange}
            /><br/>
            <button type="submit">{props.post ? 'Submit Changes' : 'Submit'}</button>
    </form>
    </div>
)
}

export default CommentForm