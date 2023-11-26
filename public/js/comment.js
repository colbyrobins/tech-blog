document.getElementById('createCommentBtn').addEventListener('click', createComment);

async function createComment() {
    const commentText =  document.getElementById('commentInput').value;

    if (!commentText) {
        alert('You cant leave an empty comment.');
        return;
    }

    // how do i get the blog id?
    const blogPost = document.querySelector('[data-blog-id]');
    const blogPostId = blogPost.dataset.blogId;

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({commentText, blogPostId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        alert('Failed to create comment.');
      }
      location.reload();
}