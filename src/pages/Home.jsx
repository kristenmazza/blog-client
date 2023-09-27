import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import PostList from '../components/PostList';
export default function Home() {
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar sx={{ height: '8rem' }} />
      <PostList />
    </Box>
  );
}
