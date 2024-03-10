import { Container, Heading, Box } from '@chakra-ui/react'

function App() {

  const boxStyles = {
    p: '10px',
    bg: '#a67f78',
    color: 'white',
    m: '15px',
    textAlign: 'center',
    borderRadius: '5px',
  }

  return (
    <>
      <Container
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Heading>Teste de biblioteca: Chakra-ui!</Heading>


        <Box sx={boxStyles}>
          <a
            href="https://github.com/camilacno/chakra-ui-tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acesse o repositório
          </a>
        </Box>
      </Container>
    </>
  )
}

export default App
