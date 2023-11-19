import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const NavLink = styled(Link)(() => ({
  color: '#151515',
  fontSize: '20px',
  fontWeight: '300',
  textTransform: 'Capitalize',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '5px',
    textDecorationThickness: '1px',
    backgroundColor: 'transparent',
    color: '#151515',
  },
  marginLeft: '1.5rem',
}));

const NavButton = styled(Button)(() => ({
  textAlign: 'center',
  textTransform: 'Capitalize',
  textDecoration: 'none',
  width: '100%',
}));

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        <Link
          href='https://kristenmazza.dev/'
          underline='none'
          sx={{
            color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
            fontSize: '25px',
            fontWeight: '700',
            '&:hover': {
              color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
            },
          }}
        >
          KM
        </Link>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ justifyContent: 'center' }}>
          <NavButton
            sx={{
              color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
              '&:hover': {
                backgroundColor: prefersDarkMode
                  ? 'rgb(33, 35, 48)'
                  : '#ebedf4',
              },
            }}
            href='https://kristenmazza.dev/#about'
          >
            <ListItemText
              primaryTypographyProps={{ fontSize: '20px', fontWeight: '300' }}
              primary='About'
            />
          </NavButton>
        </ListItem>
        <ListItem disablePadding sx={{ justifyContent: 'center' }}>
          <NavButton
            sx={{
              color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
              '&:hover': {
                backgroundColor: prefersDarkMode
                  ? 'rgb(33, 35, 48)'
                  : '#ebedf4',
              },
            }}
            href='https://kristenmazza.dev/#projects'
          >
            <ListItemText
              primaryTypographyProps={{ fontSize: '20px', fontWeight: '300' }}
              primary='Projects'
            />
          </NavButton>
        </ListItem>
        <ListItem disablePadding sx={{ justifyContent: 'center' }}>
          <NavButton
            sx={{
              color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
              '&:hover': {
                backgroundColor: prefersDarkMode
                  ? 'rgb(33, 35, 48)'
                  : '#ebedf4',
              },
            }}
            href='#'
          >
            <ListItemText
              primaryTypographyProps={{ fontSize: '20px', fontWeight: '300' }}
              primary='Blog'
            />
          </NavButton>
        </ListItem>
        <ListItem disablePadding sx={{ justifyContent: 'center' }}>
          <NavButton
            sx={{
              color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
              '&:hover': {
                backgroundColor: prefersDarkMode
                  ? 'rgb(33, 35, 48)'
                  : '#ebedf4',
              },
            }}
            href={'/#contact'}
          >
            <ListItemText
              primaryTypographyProps={{ fontSize: '20px', fontWeight: '300' }}
              primary='Contact'
            />
          </NavButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        component='nav'
        elevation={0}
        sx={{
          backgroundColor: prefersDarkMode ? 'rgb(18, 18, 18)' : '#fff',
          borderBottom: prefersDarkMode
            ? '1px solid rgb(42, 41, 41)'
            : '1px solid rgb(218,218,218)',
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: 'none' },
                color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                '&:hover': {
                  backgroundColor: prefersDarkMode
                    ? 'rgb(33, 35, 48)'
                    : '#ebedf4',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{
                flexGrow: 1,
                textAlign: 'start',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Link
                href='https://kristenmazza.dev/'
                underline='none'
                sx={{
                  color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  fontSize: '25px',
                  fontWeight: '700',
                  '&:hover': {
                    color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  },
                }}
              >
                KM
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <NavLink
                sx={{
                  color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  '&:hover': {
                    color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  },
                }}
                href='https://kristenmazza.dev/#about'
              >
                About
              </NavLink>
              <NavLink
                sx={{
                  color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  '&:hover': {
                    color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  },
                }}
                href='https://kristenmazza.dev/#projects'
              >
                Projects
              </NavLink>
              <NavLink
                sx={{
                  color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  '&:hover': {
                    color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  },
                }}
                href='https://blog.kristenmazza.dev'
              >
                Blog
              </NavLink>
              <NavLink
                sx={{
                  color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  '&:hover': {
                    color: prefersDarkMode ? 'rgb(230, 230, 230)' : '#151515',
                  },
                }}
                href='#contact'
              >
                Contact
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: prefersDarkMode
                ? 'rgb(18, 18, 18)'
                : 'rgb(250, 250, 250)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
