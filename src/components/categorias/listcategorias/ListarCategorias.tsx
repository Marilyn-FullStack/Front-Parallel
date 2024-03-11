import { useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategorias/CardCategorias";

interface ListaCategoriasProps {
  getCategorias: () => void;
  categorias: Categoria[];
}

function ListaCategorias({ categorias, getCategorias }: ListaCategoriasProps) {
  useEffect(() => {
    getCategorias();
  }, [categorias.length]);

  return (
    <Box mt={4}>
      {categorias.length === 0 ? (
        <Spinner size="xl" thickness="4px" color="blue.500" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      )}
    </Box>
  );
}

export default ListaCategorias;
