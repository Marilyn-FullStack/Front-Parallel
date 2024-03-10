import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import Produto from '../../../models/Produto';

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
} from '@chakra-ui/react';

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
    const { adicionarProduto } = useContext(CartContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="product">
                <div className="product-card">
                    <div className="product-info">
                        <div className="product-img">
                            <img src={produto.foto} alt="" className="max-w-48 max-h-48" />
                        </div>
                        <div className="product-details">
                            <h2 className="name">{produto.nomeProduto}</h2>
                            <span className="price">R$ {produto.preco}</span>
                        </div>
                    </div>
                    <div className="product-actions">
                        <Button onClick={onOpen} backgroundColor="#a2a182">Visualizar</Button>
                    </div>
                </div>
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
                                {isOpen && (
                                    <>
                                        <p>{produto.descricao}</p>
                                        <span className="price">R$ {produto.preco}</span>
                                        <Button onClick={() => adicionarProduto(produto)}>
                                            Add Item
                                        </Button>
                                    </>
                                )}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button backgroundColor="#a67f78" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant="ghost">Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}

export default CardProduto;
