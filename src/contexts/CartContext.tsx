import { createContext, ReactNode, useState } from "react";
import Produto from "../models/Produto";
import { ToastAlerta } from "../utils/ToastAlert";


interface CartContextProps {
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {

    // store cart products state
    const [items, setItems] = useState<Produto[]>([])

    // returns the number of items in the cart
    const quantidadeItems = items.length

    // function to add product to cart
    function adicionarProduto(produto: Produto) {
        const indice = items.find(items => items.id === produto.id) // checks if the product is already in the cart

        if (indice !== undefined) {
            ToastAlerta('Este Produto já foi Adicionado!', 'info')
        } else {
            setItems(state => [...state, produto]) // creates a new state with a new product added
            ToastAlerta('Produto Adicionado!', 'sucesso')
        }
    }

    // Função para Remover um produto especifico do Carrinho
    function removerProduto(produtoId: number) {

        // find the index of the product at 'items' array
        const indice = items.findIndex(items => items.id === produtoId)
        // creates a copy of the array items and assign to 'novoCart' avoiding changing the original state
        let novoCart = [...items]

        // check if the item index was found on the array 'items'
        if (indice >= 0) {
            novoCart.splice(indice, 1) // remove the item from 'novoCart'
            setItems(novoCart) // update the array 'items'
        }

    }

    // Função para Limpar o Carrinho
    function limparCart() {
        ToastAlerta('Compra Efetuada com Sucesso', 'sucesso')
        setItems([])
    }

    return (
        <CartContext.Provider
            value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems }}
        >
            {children}
        </CartContext.Provider>
    ) 
}