import React from 'react';
import Container from '@mui/material/Container';
import PostCard from './PostCard';
import styles from './PostList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/posts',
        );
        setPosts(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPosts(null);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  const postCards = posts.map((post) => {
    if (error) return <p> An error was encountered.</p>;
    const { _id, title, date, uploaded_image } = post;
    const formattedDate = format(new Date(date), 'MMMM dd, yyyy');

    return (
      <React.Fragment key={_id}>
        <PostCard
          title={title}
          date={formattedDate}
          src={uploaded_image}
          id={_id}
        />
      </React.Fragment>
    );
  });

  return (
    <Container maxWidth='lg'>
      <div className={styles.cardGrid}>{postCards}</div>
    </Container>
  );
}
