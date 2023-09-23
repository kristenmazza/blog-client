import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import PostList from './PostList';
export default function Content() {
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <PostList />
    </Box>
  );
}
