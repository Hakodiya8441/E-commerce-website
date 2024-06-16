import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        E-commerce Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          color:"white"
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h3" component="h1" gutterBottom>
            E-Commerce
          </Typography>
          {/* <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography> */}
          <Typography variant="h2">
     <span><Link href="https://www.facebook.com/himanshu.bairwa.7370"><FacebookIcon/></Link></span>
     <span style={{ marginLeft:"15px"}}><Link href="https://www.instagram.com/himanshu__1822/"><InstagramIcon/></Link></span>
     <span style={{ marginLeft:"15px"}}><Link href="https://github.com/Hakodiya8441"><GitHubIcon/></Link></span>
          </Typography>
        </Container>
        <Box
          component="footer"
          // sx={{
          //   py: 3,
          //   px: 2,
          //   mt: 'auto',
          //   backgroundColor: (theme) =>
          //     theme.palette.mode === 'light'
          //       ? theme.palette.grey[200]
          //       : theme.palette.grey[800],
          // }}
        >
          {/* <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography> */}
            {/* <Copyright /> */}
          {/* </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}