import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalPage from './Pages/PersonalPage';
import './Styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PersonalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
