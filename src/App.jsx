import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';

function App() {
  return (
    < >
     <header>
       <nav>
         <ul className='List'>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About </Link></li>
           
         </ul>
       </nav>
     </header>
     <Routes>
      <Route path='/' element={<Homepage description={'HomePage'}/>}></Route>
      <Route path='/about' element={<Aboutpage />}></Route>


     </Routes>
    </>
  );
}

export default App;
