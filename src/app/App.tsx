import './App.css'
import {Provider} from "react-redux";
import store from "./store.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../pages/main";
import Login from "../pages/login";
import ProtectedRoute from "./routes/protectedRoute.tsx";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<ProtectedRoute element={<Main />} />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </BrowserRouter>
      </Provider>
  )
}

export default App
