import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { Box } from "@chakra-ui/react";
import FormCategoria from "../formcategorias/FormCategorias";
import ListaCategorias from "../listcategorias/ListarCategorias";
import { ToastAlerta } from "../../../utils/ToastAlert";

function FormList() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Box className="container flex flex-col items-center justify-center mx-auto">
      <Box className="w-3/4 pb-4">
        <FormCategoria />
      </Box>
      
      <Box className="w-full pb-4 mt-40">
        <ListaCategorias getCategorias={function (): void {
                  throw new Error("Function not implemented.");
              } } categorias={[]} />
      </Box>
    </Box>
  );
}

export default FormList;
