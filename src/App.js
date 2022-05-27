import { Navbar, ProtectedRoute } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Account, SignUp } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
