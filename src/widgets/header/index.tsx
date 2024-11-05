import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice.ts';
import { Link } from 'react-router-dom';

interface NavType {
  title: string;
  route: string;
}

const navs: NavType[] = [
  { title: 'Главная', route: '/' },
  { title: 'Планеты', route: '/planets' },
  { title: 'Корабли', route: '/starships' },
];

function Header() {
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" gap="30px">
            <Typography variant="h6" component="div">
              Test
            </Typography>
            <Box display="flex" gap="10px">
              {navs.map((nav) => (
                <Link to={nav.route} style={{ textDecoration: 'none', color: 'white' }}>
                  <Button
                    key={nav.title}
                    color="inherit"
                    sx={{
                      backgroundColor: window.location.pathname === nav.route ? '#004886' : '',
                    }}
                  >
                    {nav.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
          <Button
            color="inherit"
            onClick={() => dispatch(logout())}
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'red',
            }}
          >
            Выйти
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
