import Container from '@mui/material/Container';
import styles from './Post.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Avatar, CircularProgress, Divider, Toolbar } from '@mui/material';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';
import CommentList from '../components/CommentList';

export default function Post() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + `/posts/${postId}`,
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
  }, [postId]);

  const postDetail = () => {
    if (error) return <p> An error was encountered.</p>;
    const { title, date, content, uploaded_image } = post;
    const formattedDate = dateFormat(date, 'mmmm d, yyyy');

    return (
      <>
        <h1 className={styles.postTitle}>{title}</h1>
        <div className={styles.postDetails}>
          <Avatar
            alt=''
            src='/public/images/dark-kmazza.jpg'
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
        <div className={styles.postBody}>{content}</div>
        <Divider light className={styles.divider} />
        <h2>Comments</h2>
      </>
    );
  };

  return (
    <Container maxWidth='md'>
      <Toolbar />
      {loading ? <CircularProgress color='inherit' /> : postDetail()}
      <CommentList />
    </Container>
  );
}
