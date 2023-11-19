import Container from '@mui/material/Container';
import styles from './Post.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Avatar,
  Divider,
  Skeleton,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

export default function Post() {
  const { slug } = useParams();

  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [comments, setComments] = useState([]);
  const [commentsError, setCommentsError] = useState(null);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + `/posts/${slug}/comments`,
        );
        setComments(response.data);
        setCommentsError(null);
      } catch (err) {
        setCommentsError(err.message);
        setComments(null);
      } finally {
        setCommentsLoading(false);
      }
    };
    getComments();
  }, [slug]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + `/posts/${slug}`,
        );
        setPost(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [slug]);

  const postSkeleton = () => {
    return (
      <div className={styles.skeleton}>
        <Stack spacing={0} sx={{ width: '100%' }}>
          <Skeleton
            variant='text'
            sx={{
              fontSize: '2rem',
              bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
            }}
          />
          <div className={styles.skeletonRow}>
            <Skeleton
              variant='circular'
              sx={{ bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300' }}
              width={75}
              height={75}
            />
            <div className={styles.skeletonCol}>
              <Skeleton
                sx={{ bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300' }}
                height={35}
                width={120}
              />
              <Skeleton
                sx={{ bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300' }}
                height={30}
                width={130}
              />
            </div>
          </div>
          <Skeleton
            sx={{ bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300' }}
            height={400}
            variant='rounded'
          />
          <div className={styles.skeletonText}>
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
            <Skeleton
              variant='text'
              sx={{
                fontSize: '1.1rem',
                bgcolor: prefersDarkMode ? 'grey.900' : 'grey.300',
              }}
            />
          </div>
          <div style={{ width: '100%' }}></div>
        </Stack>
      </div>
    );
  };

  const postDetail = () => {
    if (error) return <p> An error was encountered.</p>;
    const { title, date, content, uploaded_image } = post;
    const formattedDate = dateFormat(date, 'mmmm d, yyyy');

    const renderHTML = () => {
      return (
        <div
          className={styles.postBody}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      );
    };

    return (
      <>
        <h1 className={styles.postTitle}>{title}</h1>
        <div className={styles.postDetails}>
          <Avatar
            alt=''
            src='/images/kmazza.jpg'
            sx={{ width: 75, height: 75 }}
            style={{
              border: '2px solid rgb(235, 237, 244)',
            }}
          />
          <div className={styles.column}>
            <p>Kristen Mazza</p>
            <p className={styles.lightText}>{formattedDate}</p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.mainImage} src={uploaded_image} alt='' />
        </div>
        {renderHTML()}
        <Divider
          sx={{
            bgcolor: prefersDarkMode ? 'rgb(80, 80, 80)' : 'rgb(230, 230, 230)',
          }}
          className={styles.divider}
        />
      </>
    );
  };

  return (
    <Container maxWidth='md'>
      <Toolbar sx={{ height: '8rem' }} />
      {loading ? postSkeleton() : postDetail()}
      <CommentForm setComments={setComments} />
      <CommentList
        comments={comments}
        commentsLoading={commentsLoading}
        commentsError={commentsError}
      />
    </Container>
  );
}
