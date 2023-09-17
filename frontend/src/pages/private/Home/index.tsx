import { useState } from "react";
import { PrivateLayout } from "../../../layouts/PrivateLayout";
import { CheckSquare, Square } from "lucide-react";

const Home = () => {
  const [done, setDone] = useState(false);

  const handleDone = () => {
    setDone(!done);
  };

  return (
    <PrivateLayout>
      <div className="flex flex-col justify-center">
        <div className="pb-5 pt-5">
          <div className="flex justify-between px-2">
            <h3 className="font-bold">Categorias</h3>
            <span className="text-green-600">Nova categoria</span>
          </div>
          <ul className="text-center">
            <li>#Favoritos</li>
            <li>#Trabalhos</li>
            <li>#Estudos</li>
          </ul>
        </div>
        <div className="border-t pt-5">
          <div className="mb-4">
            <h3 className="font-bold">Tarefas</h3>
            <input type="text" placeholder="Adicionar nova tarefa" className="p-2 w-full outline-none rounded-md" />
          </div>
          <ul className="flex items-center justify-center">
            <li className="flex items-center gap-2" onClick={handleDone}>
              {/* <div className="w-5 h-5 border rounded-md"></div> */}
              <div>
                {done && <CheckSquare />}
                {!done && <Square/>}
              </div>
              <p className={`${done ? 'line-clamp-1 text-red-500' : ''}`}>Comprar bananas para fazer panquecas</p>
            </li>
          </ul>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Home;