import {Box, Container, Paper, Typography} from "@mui/material";
import LoginForm from "./components/loginForm.tsx";

const Login = () => {
    return (
        <Container maxWidth="xs">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
                    <Typography variant="h5" align="center" marginBottom={2}>
                        Login
                    </Typography>
                    <LoginForm/>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;