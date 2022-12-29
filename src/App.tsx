import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalPage from './Pages/PersonalPage';
import SecondaryPage from './Pages/SecondaryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PersonalPage />} />
        <Route path='/secondary' element={<SecondaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
