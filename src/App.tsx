import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalPage from './Pages/PersonalPage';

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
