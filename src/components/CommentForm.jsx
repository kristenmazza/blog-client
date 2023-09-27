import { Button, FormControl, TextField } from '@mui/material';
import styles from './CommentForm.module.css';
import styled from '@emotion/styled';

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

export default function CommentForm() {
  return (
    <div className={styles.formWrapper}>
      <FormControl className={styles.form}>
        <StyledTextField
          className={styles.input}
          id='filled-basic'
          label='Name'
          variant='standard'
        />
        <StyledTextField
          className={styles.input}
          id='filled-basic'
          label='Comment'
          variant='standard'
          multiline
          rows={3}
          maxRows={8}
        />
        <Button
          className={styles.button}
          sx={{
            backgroundColor: 'rgb(96, 107, 196)',
            color: 'rgb(250, 250, 250)',
            '&:hover': {
              transform: 'translateY(-1px)',
              backgroundColor: 'rgb(111, 122, 202)',
              cursor: 'pointer',
            },
          }}
        >
          Post Comment
        </Button>
      </FormControl>
    </div>
  );
}
