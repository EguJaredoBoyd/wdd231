document.addEventListener("DOMContentLoaded", function() {
    fetch("./data/project.json")
        .then(response => response.json())
        .then(data => {
            const blogSection = document.getElementById("blog-section");
            data.blog.forEach(post => {
                const blogPost = document.createElement("div");
                blogPost.classList.add("blog-post");
                
                blogPost.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><strong>Date:</strong> ${post.date}</p>
                    <img src="${post.image}" alt="${post.title}" class="blog-image">
                    <p>${post.content}</p>
                `;
                
                blogSection.appendChild(blogPost);
            });
        })
        .catch(error => console.error("Error loading blog data:", error));
});
