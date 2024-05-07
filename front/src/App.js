import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './page/Index';
import VacationPage from './page/VacationPage';
import SalaryPage from './page/Salarypage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/vacationpage" element={<VacationPage/>}></Route>
      <Route path="/salarypage" element={<SalaryPage/>}></Route>
    </Routes>
  );
}

export default App;
