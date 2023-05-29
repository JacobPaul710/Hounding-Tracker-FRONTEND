import MineralIndex from './pages/MineralIndex';
import MineralShow from './pages/MineralShow';
import MineralNew from './pages/MineralNew';
import MineralHome from './pages/MineralHome';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<MineralHome />} />
        <Route path='/minerals' element={<MineralIndex />} />
        <Route path='/minerals'>
          <Route path=':id' element={<MineralShow />} />
          </Route>
        <Route path='/new' element={<MineralNew />} />

     </Routes>
    </>
  );
}

export default App;
