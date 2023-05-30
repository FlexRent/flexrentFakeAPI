import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import CadastroProduto from "./components/cadastroProduto/CadastroProduto";
import CadastroProduto2 from "./components/cadastroProduto/CadastroProduto2";
import CadastroUsuario from "./components/cadastroUsuario/CadastroUsuario";
import CadastroUsuario2 from "./components/cadastroUsuario/CadastroUsuario2";
import CadastroUsuario3 from "./components/cadastroUsuario/CadastroUsuario3";
import CarrinhoPagamento from "./components/carrinho/CarrinhoPagamento";
import CarrinhoFinal from "./components/carrinho/CarrinhoFinal";
import DetalhesProduto from "./components/detalhesProduto/DetalhesProduto";
import DetalhesLocacao from "./components/detalheLocacao/DetalheLocacao";
import RecuperarSenha from "./components/recuperarSenha/RecuperarSenha";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro-produto" element={<CadastroProduto />} />
      <Route path="/cadastro-produto2" element={<CadastroProduto2 />} />
      <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
      <Route path="/cadastro-usuario2" element={<CadastroUsuario2 />} />
      <Route path="/cadastro-usuario3" element={<CadastroUsuario3 />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carrinho-pagamento" element={<CarrinhoPagamento />} />
      <Route path="/carrinho-final" element={<CarrinhoFinal />} />
      <Route path="/detalhes-produto" element={<DetalhesProduto />} />
      <Route path="/detalhes-locacao" element={<DetalhesLocacao />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
