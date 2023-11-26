const deleteBtn = document.getElementById('delete-post-btn');
const updateBtn = document.getElementById('update-post-btn');

const blogId = () => document.querySelector('[data-blog-id]').dataset.blogId;

// function to delete post.
const deletePost = async () => {
  
  await fetch(`/api/blogs/${blogId()}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      alert('Unable to delete post.');
    }
    document.location.replace('/dashboard');
  })
  .catch(error => {
    console.error('DELETE request failed', error)
  });

};

const updatePost = () => {

};

updateBtn.addEventListener('click', updatePost);
deleteBtn.addEventListener('click', deletePost);