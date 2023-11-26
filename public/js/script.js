const blogHeaders = document.querySelectorAll('.card-header');

blogHeaders.forEach(header => {
    header.addEventListener('click', async function() {
        document.location.replace(`/post/${header.textContent}`)
    });
});
