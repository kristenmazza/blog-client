import React from 'react';
import Container from '@mui/material/Container';
import PostCard from './PostCard';
import styles from './PostList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Skeleton, Stack, useMediaQuery } from '@mui/material';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

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

  const postSkeleton = () => {
    return (
      <div className={styles.skeleton}>
        <Stack spacing={3} sx={{ width: '100%' }}>
          <Skeleton
            sx={{ bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300' }}
            className={styles.skeletonRect}
            height={250}
            variant='rounded'
          />
          <Skeleton
            sx={{ bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300' }}
            className={styles.skeletonRect}
            height={250}
            variant='rounded'
          />
          <Skeleton
            sx={{ bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300' }}
            className={styles.skeletonRect}
            height={250}
            variant='rounded'
          />
          <div style={{ width: '100%' }}></div>
        </Stack>
      </div>
    );
  };

  const publishedPosts = posts
    .filter((post) => post.published === true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const postCards = publishedPosts.map((post) => {
    if (error) return <p> An error was encountered.</p>;
    const { _id, slug, title, date, uploaded_image } = post;
    const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
    return (
      <React.Fragment key={_id}>
        <PostCard
          title={title}
          date={formattedDate}
          src={uploaded_image}
          slug={slug}
        />
      </React.Fragment>
    );
  });

  return (
    <Container maxWidth={false} sx={{ maxWidth: '1075px' }}>
      <div className={styles.cardGrid}>
        {loading ? postSkeleton() : postCards}
      </div>
    </Container>
  );
}
