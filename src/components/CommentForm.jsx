import { Button, FormControl, TextField, useMediaQuery } from '@mui/material';
import styles from './CommentForm.module.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== 'focusColor',
})(() => ({
  // input label when focused
  '& label.Mui-focused': {
    color: 'rgb(111, 122, 202)',
  },
  // focused color for input with variant='standard'
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgb(111, 122, 202)',
  },
  // focused color for input with variant='filled'
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: 'rgb(111, 122, 202)',
  },
  // focused color for input with variant='outlined'
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(111, 122, 202)',
    },
  },
}));

export default function CommentForm({ setComments }) {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const { slug } = useParams();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = import.meta.env.VITE_BACKEND_URL + `/posts/${slug}/comments`;

    let result = await fetch(URL, {
      method: 'post',
      body: JSON.stringify({ author, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();

    if (result) {
      setAuthor('');
      setMessage('');
    }

    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setComments(data);
      });
  };

  return (
    <div className={styles.formWrapper}>
      <form action='' onSubmit={handleSubmit}>
        <FormControl className={styles.form}>
          <StyledTextField
            className={styles.input}
            inputProps={{
              'aria-labelledby': 'name',
              style: {
                color: prefersDarkMode ? 'rgb(230, 230, 230' : '#000000',
              },
            }}
            sx={{
              '& label': {
                color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#000000',
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: prefersDarkMode
                  ? 'rgb(230, 230, 230)'
                  : '#000000',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: prefersDarkMode
                  ? 'rgb(230, 230, 230)'
                  : '#000000',
              },
            }}
            id='name'
            label='Name'
            variant='standard'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <StyledTextField
            className={styles.input}
            inputProps={{
              'aria-labelledby': 'comment',
              style: {
                color: prefersDarkMode ? 'rgb(230, 230, 230' : '#000000',
              },
            }}
            sx={{
              '& label': {
                color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#000000',
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: prefersDarkMode
                  ? 'rgb(230, 230, 230)'
                  : '#000000',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: prefersDarkMode
                  ? 'rgb(230, 230, 230)'
                  : '#000000',
              },
            }}
            id='comment'
            label='Comment'
            variant='standard'
            multiline={true}
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button
            className={styles.button}
            type='submit'
            sx={{
              backgroundColor: prefersDarkMode
                ? 'rgb(43, 48, 88)'
                : 'rgb(111, 122, 202)',
              color: 'rgb(250, 250, 250)',
              '&:hover': {
                transform: 'translateY(-1px)',
                backgroundColor: prefersDarkMode
                  ? 'rgb(43, 48, 100)'
                  : 'rgb(111, 122, 202)',
                cursor: 'pointer',
              },
            }}
          >
            Post Comment
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  setComments: PropTypes.func,
};
