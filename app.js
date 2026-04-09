async function fetchPosts() {
    const response = await
fetch('https://jsonplaceholder.typicode.com/posts?_limit =5');
    const posts = await response.json();
    const container =
document.getElementById('posts-container'); // Corrected ID

    // Clear previous content if any
    container.innerHTML = '';
    
    posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post'; // Apply styling from CSS
        div.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
       `;
        container.appendChild(div);
    });
}
// Example usage: Call this function when a button is
clicked
//
document.getElementById('loadPostsBtn').addEventListener
('click', fetchPosts);
