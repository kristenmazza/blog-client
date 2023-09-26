import React from 'react';
import styles from './CommentList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + `/posts/${slug}/comments`,
        );
        setComments(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setComments(null);
      } finally {
        setCommentsLoading(false);
      }
    };
    getComments();
  }, [slug]);

  const commentList = comments.map((comment) => {
    if (error) return <p> An error was encountered.</p>;
    const { _id, message, date, author } = comment;
    const formattedDate = dateFormat(date, 'mmmm d, yyyy');

    return (
      <React.Fragment key={_id}>
        <div className={styles.comment}>
          <p className={styles.author}>{author}</p>
          <p className={styles.date}>{formattedDate}</p>
          <p className={styles.message}>{message}</p>
        </div>
        <Divider />
      </React.Fragment>
    );
  });

  return (
    <>
      {commentsLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        commentList
      )}
    </>
  );
}
