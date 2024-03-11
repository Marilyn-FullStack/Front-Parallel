import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="card">
      {/* Tipo da Categoria */}
      <div className="text">
        <h3>TIPO</h3>
        <span>{categoria.tipo}</span>
      </div>

      {/* Nome Categoria */}
      <div className="text">
        <h3>CATEGORIA</h3>
        <span>{categoria.nomeCategoria}</span>
      </div>

      {/* Edit e Delete */}
      <div className="icons">
        {/* Edit */}
        <Link to={`/editarcategoria/${categoria.id}`} className="btn">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVR4nOWUvUrEQBSFg8XqM/gEgmunbc4ZdostbPMkYmUhWKivs8IGm+wdjL5BGhHBRmX3BUQsIpOdlZD/bNKoAwPJZe757pybG8f598ufTLY1eamJFyGeNXkRed6gN3Ehfa0Yp7coXPckjlkiSCz0yD2ak6MVgG+5BCEespVkdlgkvgYIMBTg0L6/5gA14rGQd0WVCxGknhfJefKqFNDGFgGGNhakCvFNrDUg8ryBkDfW46V23YPEWmBPK76v8nErwE6hQBUg6ipeBYj6EC8DxOfO1o/nikvjuYkHSu2vG1rqeROAAMe9iJcCiKmdzNMqcTtDYSvA/Xi8qxW/hPg0wpo8SXpQUHmTTzx3SJNnNvZhIKmpnWVt2Qyg+JSaZHOTqemJaXxdbiOAkHMhHs1NjF1tcjc/9CsAusN2agBhF3Gxv/O/t74BXkrM/ryAiREAAAAASUVORK5CYII="
            alt="Edit"
          />
        </Link>

        {/* Delete */}
        <Link to={`/deletarcategoria/${categoria.id}`} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0,0,255.99609,255.99609"
          >
            {/* SVG Path */}
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;