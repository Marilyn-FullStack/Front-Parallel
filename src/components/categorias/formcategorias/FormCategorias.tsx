import { useEffect, useState, ChangeEvent, useContext } from "react";
import { Box, Input, Button, Spinner, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlert";

interface FormularioCategoriaProps {
  setCategorias?: (value: Categoria[]) => void;
  categorias?: Categoria[];
}

function FormCategoria({ categorias, setCategorias }: FormularioCategoriaProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      ToastAlerta("Categoria não encontrada!", "erro");
      retornar();
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Categoria atualizada!", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao atualizar a Categoria", "erro");
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Categoria cadastrada!", "sucesso");

        if (setCategorias !== undefined && categorias !== undefined) {
          setCategorias([...categorias, categoria]);
        }

        setCategoria({
          id: 0,
          nomeCategoria: "",
          tipo: "",
          foto: "",
        });
      } catch (error: any) {
        ToastAlerta("Erro ao cadastrar a Categoria", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mx="auto"
    >
      <Heading as="h1" fontSize="4xl" textAlign="center" my={8}>
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </Heading>
      <form
        onSubmit={gerarNovaCategoria}
        style={{ width: "50%", display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Input
          id="input-1"
          autoFocus
          type="text"
          name="tipo"
          placeholder="Calçado"
          required
          value={categoria.tipo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        />
        <Input
          id="input-2"
          type="text"
          name="nomeCategoria"
          placeholder="Tênis"
          required
          value={categoria.nomeCategoria}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        />
        <Button
          type="submit"
          id="buttonCategoria"
          w="50%"
          py={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="#a67f78"
          color="#e1dcd9"
          p="15px"
          borderRadius="5px"
          _hover={{ bgColor: "#687259" }}
        >
          {isLoading ? (
            <Spinner size="md" w="50%" color="white" />
          ) : (
            <span>Concluir</span>
          )}
        </Button>
      </form>
    </Box>
  );
}

export default FormCategoria;