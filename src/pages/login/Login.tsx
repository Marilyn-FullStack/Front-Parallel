import { Box, Button, Heading, Input, Link as ChakraLink, VStack } from '@chakra-ui/react';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';
import '../../App.css'

function Login() {
    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario?.token !== '') {
            navigate('/home');
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <>
            <Box className="login-box md-10" p={4} display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
                <VStack spacing={4} align="stretch" maxW="400px" w="100%">
                <Box borderWidth="2px" borderRadius="md" p={14} pt={8} pb={8}>
                    <Heading as="h2" size="lg" textAlign="center" marginBottom={6}>Login</Heading>
                        <form onSubmit={handleSubmit}>
                            <div className="user-box">
                                <Input
                                    type="email"
                                    id="usuario"
                                    name="usuario"
                                    value={usuarioLogin.usuario || ''}
                                    onChange={atualizarEstado}
                                    placeholder="Email"
                                    mb={6}
                                    focusBorderColor="#687259"
                                />
                            </div>
                            <div className="user-box">
                                <Input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    value={usuarioLogin.senha || ''}
                                    onChange={atualizarEstado}
                                    placeholder="Senha"
                                    mb={8}
                                    focusBorderColor="#687259"
                                />
                            </div>
                            <div className="cadastro">
                                <span className="flex justify-end mb-1">
                                    <ChakraLink as={Link} to="/cadastro" className="hover:underline" fontSize={13}>
                                        Não possui conta? Cadastre-se
                                    </ChakraLink>
                                </span>
                            </div>
                            <div className='h-2'></div>
                            <Button
                                type="submit"
                                className="buttonEntrar"
                                bgColor="#a67f78"
                                color="#e1dcd9"
                                p="15px"
                                borderRadius="5px"
                                _hover={{ bgColor: '#687259' }}
                                w="100%"
                            >
                                {isLoading ? 'Carregando...' : 'Entrar'}
                            </Button>
                        </form>
                    </Box>
                </VStack>
            </Box>
        </>
    );
}

export default Login;
