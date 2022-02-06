import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Layout/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import Destinations from './components/Pages/Destinations/Destinations';
import ContactsPage from './components/Pages/Contacts/Contacts';
import Booking from './components/Pages/Booking/Booking';

const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/destinations/:category' element={<Destinations />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/booking/:id' element={<Booking />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
