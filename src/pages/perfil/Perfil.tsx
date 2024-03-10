import { Box, Heading, Image, VStack } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlert';

function Perfil() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      navigate("/login");
    }
  }, [usuario.token, navigate]);

  return (
    <Box className='container mx-auto mt-4 rounded-2xl overflow-hidden' p={4} display='flex' flexDirection='column' alignItems='center'>
      <Image
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nomeUsuario}`}
        className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
      />
      <VStack spacing={4} mt={-6} bg='sky.500' color='white' fontSize='2xl' p={8} borderRadius='md'>
        <Heading as='p'>Nome: {usuario.nomeUsuario}</Heading>
        <Heading as='p'>Email: {usuario.usuario}</Heading>
      </VStack>

    </Box>
  );
}

export default Perfil;
