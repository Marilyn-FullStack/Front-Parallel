import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { CartContext } from '../../../contexts/CartContext';
import Produto from '../../../models/Produto';
import { useContext } from 'react';

interface CardProdutoProps {
    produto: Produto
}

function ModalProdutos({ produto }: CardProdutoProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { adicionarProduto } = useContext(CartContext);
    return (
        <>
            <Button onClick={onOpen} backgroundColor={'#a2a182'}>Visualizar</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{produto.nomeProduto}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="product-img">
                            <img src={produto.foto} alt="" />
                        </div>
                        <div className="info">
                            <p>{produto.descricao}</p>
                            <span className="price">R$ {produto.preco}</span>
                            <Button onClick={() => adicionarProduto(produto)}>
                                Add Item
                            </Button>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button backgroundColor={'#a67f78'} mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalProdutos