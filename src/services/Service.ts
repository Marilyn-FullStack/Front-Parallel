import axios from "axios";

const api = axios.create({
    baseURL: 'https://segunda-chance.onrender.com/'
})

export const registerProduct = async (url: string, data: Object, setData: Function) => {
    const response = await api.post(url, data)
    setData(response.data)
}

export const registerUser = async (url: string, data: Object, setData: Function) => {
    const response = await api.post(url, data)
    setData(response.data)
}

export const login = async (url: string, data: Object, setData: Function) => {
    const response = await api.post(url, data)
    setData(response.data)
}

export const atualizar = async (url: string, data: Object, setData: Function, header: Object) => {
    const response = await api.put(url, data, header)
    setData(response.data)
}

export const buscar = async (url: string, setData: Function, header: Object) => {
    const response = await api.get(url, header)
    setData(response.data)
}

export const cadastrar = async (url: string, data: Object, setData: Function, header: Object) => {
    const response = await api.post(url, data, header)
    setData(response.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}

export default api