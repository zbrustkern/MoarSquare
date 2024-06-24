import { useState, useEffect } from 'react';

const PostForm = (props) => {
    const emptyForm = {
        location: '',
        text: '',
    }
    const [location, setLocation] = useState(null);
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

    const locateMe = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setFormData({...formData, "location": `(${location.longitude},${location.latitude})`});
            })
        }
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.post ? props.handleEditPost(props.post.id, formData) : props.handleNewPost(formData)
        setFormData(emptyForm);
    };
    
    return (
        <div className='post-form'>
        <form onSubmit={handleSubmit}>
        <h3>{props.post? 'Edit Check In' : 'New Check In'}</h3>
        <h4>Post Details</h4>
        <button onClick={locateMe}>Locate me!</button><br />
            <label htmlFor="location-input">Location:</label>
                <input
                    required
                    type="text"
                    name="location"
                    id="location-input"
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
                <button type="submit">{props.post ? 'Submit Changes' : 'Create New Post'}</button>
        </form>
        </div>
    )
}

export default PostForm