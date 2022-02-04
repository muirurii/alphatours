import HeroBackground from './components/Hero/Herobg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Hero/Header';

const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HeroBackground />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
