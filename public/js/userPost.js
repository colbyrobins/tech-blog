const newPostHandler = async (event) => {
    const blogPostsContainer = document.querySelector('#blog-posts');
    const newPostBtn = document.querySelector('#new-post-button');

    // Go to createPost page.
    document.location.replace('/createPost');
    
};

const createNewPost = async (event) => {
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('bodyInput').value;

    // check that title and content are not empty.
    if (!title || !content) {
        alert('Blog post must have a title and content.');
        return; 
    }

    // Create the new post
    const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create blog post!');
      }
    
};