import './App.css';
import { Provider } from 'react-redux';
import store from '../features/store/store.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/login';
import ProtectedRoute from '../features/routes/protectedRoute.tsx';
import Planet from '../pages/planet';
import Starship from '../pages/starship';
import { SnackbarProvider } from 'notistack';
import { Container } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import EntityPage from '../pages/entityPage';

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <Container maxWidth="xl">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/planets" element={<Planet />} />
                <Route path="/starships" element={<Starship />} />
                <Route path="/login" element={<Login />} />
                <Route path="/:type/:id" element={<EntityPage />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </SnackbarProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
