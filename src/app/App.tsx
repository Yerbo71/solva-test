import './App.css';
import { Provider } from 'react-redux';
import store from './store.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/login';
import ProtectedRoute from './routes/protectedRoute.tsx';
import Planet from '../pages/planet';
import Starship from '../pages/starship';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/planets" element={<Planet />} />
          <Route path="/starships" element={<Starship />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
