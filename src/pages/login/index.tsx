import { Box, Paper, Typography } from '@mui/material';
import LoginForm from './components/loginForm.tsx';

const Login = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          background: 'radial-gradient(circle, rgba(174,175,238,1) 0%, rgba(103,63,223,1) 77%)',
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 4, width: '380px', background: 'rgba(255, 255, 255, 0.75)' }}
        >
          <Typography variant="h5" align="center" marginBottom={2}>
            Вход
          </Typography>
          <LoginForm />
        </Paper>
      </Box>
    </>
  );
};

export default Login;
