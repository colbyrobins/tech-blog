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

// function to update post.
const updatePost = async () => {
  const updatedTitle = document.getElementById('titleInput').value;
  const updatedContent = document.getElementById('bodyInput').value;

  if (!updatedTitle || !updatedContent) {
    alert('Title and/or content can not be empty.');
    return;
  }

  await fetch(`/api/blogs/${blogId()}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      updatedTitle,
      updatedContent
    })
  })
  .then(response => {
    if (!response.ok) {
      alert('Unable to update post.')
    }
    return response.json();
  })
  .catch(error => {
    console.error('PUT request failed', error);
  })
};

updateBtn.addEventListener('click', updatePost);
deleteBtn.addEventListener('click', deletePost);