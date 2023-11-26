
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

// find all the card-headers (posts) on the dashboard and add 
// a handler to edit a post.
const blogHeaders = document.querySelectorAll('.card-header');

// add handler to each post.
blogHeaders.forEach(header => {
    header.addEventListener('click', async function() {
        document.location.replace(`/edit/${header.dataset.blogId}`)
    });
});