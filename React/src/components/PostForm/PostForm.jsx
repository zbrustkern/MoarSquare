import { useState, useEffect } from 'react';

const PostForm = (props) => {
    const emptyForm = {
        location: '',
        text: '',
    }

    const [formData, setFormData] = useState(emptyForm);
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    useEffect(() => {
        const fillForm = () => {
            setFormData({
                location: props.post.location,
                text: props.post.text
              })
        }
        if (props.post) fillForm();
    }, [props.post])

    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (props.post) {
            props.handleEditPost(formData)
        } else {
            props.handleNewPost(formData);
        }
        setFormData(emptyForm);
    };
    
    return (
        <div className='post-form'>
        <form onSubmit={handleSubmit}>
            <h3>{props.post.id? 'Edit Post' : 'New Post'}</h3>
            <h1>Post Details</h1>
            <label htmlFor="text-input">Location:</label>
                <input
                    required
                    type="text"
                    name="location"
                    id="text-input"
                    value={formData.location}
                    onChange={handleChange}
                /><br/>
                <label htmlFor="text-input">Text:</label>
                <input
                    required
                    type="text"
                    name="text"
                    id="text-input"
                    value={formData.text}
                    onChange={handleChange}
                /><br/>
        </form>
        </div>
    )
}

export default PostForm