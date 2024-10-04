// Blog Model functionality
const blogPosts = [
    { title: "How to Build Good Habits", content: "Content for building good habits..." },
    { title: "Productivity Tips", content: "Content for productivity tips..." }
];

function displayBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogContainer.appendChild(postElement);
    });
}

document.addEventListener("DOMContentLoaded", displayBlogPosts);
