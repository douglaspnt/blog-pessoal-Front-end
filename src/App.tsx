import Navbar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './componentes/temas/listaTemas/ListaTemas';
import FormularioTema from './componentes/temas/formularioTema/FormularioTema';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;