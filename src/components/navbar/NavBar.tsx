import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Flex padding={6} bg='#e6cebc' fontSize={20}>
            <Link to="/home">
                <Box p='2'>
                    <img src="https://ik.imagekit.io/ghc9vhgb1/logo-01-removebg-preview.png?updatedAt=1710083268954" alt="Logo" width={70} />
                </Box>
            </Link>
            <Spacer />
            <Box p='4'>
                <ul className="list-style-none mr-auto flex lg:flex-row" data-te-navbar-nav-ref>
                    <li className="mb-4 mx-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <Link to="/home" className="flex px-4 py-2 items-center justify-center font-semibold rounded-3xl transition-colors duration-300 hover:text-white hover:bg-[#a67f78]" >Página Inicial</Link>
                    </li>
                    <li className="mb-4 mr-5 lg:mb-0 lg:pr-2 rounded-3xl transition-colors duration-300 hover:text-white hover:bg-[#a67f78]" data-te-nav-item-ref>
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} variant="unstyled" fontSize="20px" py="2" ml="4">
                                        {isOpen ? 'Produtos' : 'Produtos'}
                                    </MenuButton>
                                    <MenuList fontSize={15}>
                                        <MenuItem bg="#f7fafc" color={'#32435f'} _hover={{ bg: 'none', color: '#a2a182' }}>
                                            <Link to="/produtos">Ver todos os Produtos</Link>
                                        </MenuItem>
                                        <MenuItem bg="#f7fafc" color={'#32435f'} _hover={{ bg: 'none', color: '#a2a182' }}>
                                            <Link to="/categorias">Procurar por categoria</Link>
                                        </MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    </li>
                    <li className="mb-4 mr-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <Link to="/perfil" className="flex px-4 py-2 items-center justify-center font-semibold rounded-3xl transition-colors duration-300 hover:text-white hover:bg-[#a67f78]">Perfil</Link>
                    </li>
                    <li className="mb-4 mr-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <Link to="/sobre" className="flex px-4 py-2 items-center justify-center font-semibold rounded-3xl transition-colors duration-300 hover:text-white hover:bg-[#a67f78]">Sobre</Link>
                    </li>
                </ul>
            </Box>
        </Flex>
    );
}

export default NavBar