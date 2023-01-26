import ListaFuncionarios from './pages/ListaFuncionarios';
import CadastroFuncionarios from './pages/CadastroFuncionario';
import TelaPrincipal from './pages/TelaPrincipal'
import { DataProvider } from './GlobalState';

// seção de estilos
import './App.css';

//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <DataProvider>
        <Router>
          <Routes>
          {/* <Route path="/" element={<TelaPrincipal />} > </Route> */}
            <Route path="/" element={<ListaFuncionarios />} > </Route>
            <Route path="/funcionario/cadastro" element={<CadastroFuncionarios />} > </Route>
            <Route path="/funcionario/update/:id" exact element={<CadastroFuncionarios />} > </Route>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
