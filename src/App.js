import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
