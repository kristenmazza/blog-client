import React from 'react';
import styles from './CommentList.module.css';
import { CircularProgress, Divider } from '@mui/material';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

export default function CommentList({
  comments,
  commentsLoading,
  commentsError,
}) {
  const commentList = comments.map((comment, index) => {
    if (commentsError) return <p> An error was encountered.</p>;
    const { _id, message, date, author } = comment;
    const formattedDate = dateFormat(date, 'mmmm d, yyyy');

    return (
      <React.Fragment key={_id}>
        <div className={styles.comment}>
          <p className={styles.author}>{author}</p>
          <p className={styles.date}>{formattedDate}</p>
          <p className={styles.message}>{message}</p>
        </div>
        {index !== comments.length - 1 ? <Divider /> : null}
      </React.Fragment>
    );
  });

  return (
    <>
      <h2 className={styles.commentsHeader}>Comments</h2>
      {commentsLoading && <CircularProgress color='inherit' />}
      {commentList.length >= 1 && commentList}
      {!commentsLoading && commentList.length < 1 && (
        <div className={styles.commentIndicator}>Be the first to comment.</div>
      )}
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array,
  commentsLoading: PropTypes.bool,
  commentsError: PropTypes.string,
};
