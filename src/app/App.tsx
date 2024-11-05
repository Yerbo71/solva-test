import { Provider } from 'react-redux';
import store from '../features/store/store.ts';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from '../features/routes/appRoutes.tsx';

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <AppRoutes />
        </SnackbarProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
