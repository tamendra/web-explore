import React from 'react';

function Blog() {
  return (
    <section className="App-section" id="blog">
      <h2>Blog</h2>
      <div className="App-blog">
        <div className="App-blog-post">
          <h3>Understanding Microservices Architecture</h3>
          <p>
            A deep dive into the principles of microservices and how they can help build scalable applications.
          </p>
          <a href="#read-more">Read More</a>
        </div>
        <div className="App-blog-post">
          <h3>Optimizing APIs for Performance</h3>
          <p>
            Tips and techniques for building high-performance APIs that can handle thousands of requests per second.
          </p>
          <a href="#read-more">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Blog;