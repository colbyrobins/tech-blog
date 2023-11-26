const blogHeaders = document.querySelectorAll('.card-header');

// Add handler to each post so when we click it, it will be displayed
// on screen.
blogHeaders.forEach(header => {
    header.addEventListener('click', async function() {
        document.location.replace(`/post/${header.dataset.blogId}`)
    });
});
