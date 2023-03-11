import './App.css';
import AddCompany from './Components/AddCompany';
import AllCompanies from './Components/AllCompanies';
import ClimateTech from './Components/ClimateTech';
import EditCompany from './Components/EditCompany';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ClimateTech />} />
        <Route path="/add" element={<AddCompany />} />
        <Route path="/all" element={<AllCompanies/>} />
        <Route path="/edit/:id" element={<EditCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App ;