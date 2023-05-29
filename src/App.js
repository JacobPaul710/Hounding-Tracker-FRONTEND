import MineralIndex from './pages/index/MineralIndex';
import MineralShow from './pages/show/MineralShow';
import MineralNew from './pages/new/MineralNew';
import MineralHome from './pages/home/MineralHome';

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
