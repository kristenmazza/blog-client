import React from 'react';
import Container from '@mui/material/Container';
import PostCard from './PostCard';
import styles from './PostList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

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

    return (
      <React.Fragment key={_id}>
        <PostCard title={title} date={date} src={uploaded_image} />
      </React.Fragment>
    );
  });

  return (
    <Container maxWidth='lg'>
      <div className={styles.cardGrid}>
        {console.log(posts)}
        {postCards}
        {/* <PostCard
          src='https://www.cloudnetcare.fr/wp-content/uploads/2022/06/les-differents-types-de-test-d-un-logiciel.webp'
          date='September 22, 2023'
          title='From Concept to Content: Building a BlogFrom Concept to Content: Building From Concept tFrom Concept to Content: Building a Blogo Content: Building a Bloga Blog'
        />
        <PostCard
          src='https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/image5-888x1024.jpg'
          date='September 22, 2023'
          title='title of post'
        />
        <PostCard /> */}
      </div>
    </Container>
  );
}
