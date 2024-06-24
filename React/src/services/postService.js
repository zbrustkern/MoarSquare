const BASE_URL = `${import.meta.env.VITE_FLASK_BACKEND_URL}/posts`;

const indexPosts = async () => {
    try {
        const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
        return res.json();
    } catch (error) {
        console.log(error);
    }
  };


const deletePost = async (postId) => {
    try {
      const res = await fetch(`${BASE_URL}/${postId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  export {
    indexPosts,
    deletePost
   };