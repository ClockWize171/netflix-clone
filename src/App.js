import { Navbar } from './components';
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
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
