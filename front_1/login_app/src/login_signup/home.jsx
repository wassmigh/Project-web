import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Component for displaying a single post
const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Category: {post.category}</p>
    </div>
  );
};

// Main component for Home page
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API endpoint when component mounts
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://your-api-endpoint.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <Link to="/write">Write a new post</Link>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
