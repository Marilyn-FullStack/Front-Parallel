import { Box, Button, Heading, Input, Link as ChakraLink } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { ToastAlerta } from '../../utils/ToastAlert';

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nomeUsuario: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login');
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  console.log(usuario);

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
    console.log(confirmaSenha);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
      } catch (error: any) {
        if (error.response && error.response.data) {
          ToastAlerta(error.response.data.replace('Erro de validação: ', ''), 'erro');
        } else {
          ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      ToastAlerta('Dados estão inconsistentes. Verifique as informações do cadastro', 'info');
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }
  }

  return (
    <Box p={4} display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box maxW="400px" w="100%" borderWidth="2px" borderRadius="md" p={8}>
        <Heading as="h2" size="lg" textAlign="center" mb={6}>Cadastrar</Heading>
        <form onSubmit={cadastrarNovoUsuario} className="space-y-4">
          <div>
            <label htmlFor="nomeUsuario" className="block text-sm font-medium text-gray-600">
              Nome
            </label>
            <Input
              type="text"
              id="nomeUsuario"
              name="nomeUsuario"
              value={usuario.nomeUsuario}
              onChange={atualizarEstado}
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-600">
              Usuario
            </label>
            <Input
              type="email"
              id="usuario"
              name="usuario"
              value={usuario.usuario}
              onChange={atualizarEstado}
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="foto" className="block text-sm font-medium text-gray-600">
              Foto
            </label>
            <Input
              type="text"
              id="foto"
              name="foto"
              value={usuario.foto}
              onChange={atualizarEstado}
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-600">
              Senha
            </label>
            <Input
              type="password"
              id="senha"
              name="senha"
              value={usuario.senha}
              onChange={atualizarEstado}
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-600">
              Confirmar Senha
            </label>
            <Input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
              className="mt-1"
            />
          </div>

          <div className="flex items-center text-[13px]">
            <span className="text-gray-600">Já tem uma conta?&nbsp;</span>
            <ChakraLink as={Link} to="/login" className="text-blue-500 hover:underline">
              Fazer Login
            </ChakraLink>
          </div>

          <Button
            type="submit"
            bgColor="#a67f78"
            color="#e1dcd9"
            p="15px"
            borderRadius="5px"
            _hover={{ bgColor: '#687259' }}
            w="100%"
          >
            {isLoading ? 'Carregando...' : 'Cadastrar'}
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Cadastro;
