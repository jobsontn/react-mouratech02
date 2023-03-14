import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';

function Exemplo1() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
  });

  function incrementar(){
    setCount(count + 1);
  }

  return (
    <div>
      <Menu />
      <h1>Contagem: {count}</h1>
      <button onClick={incrementar} className="bg-azulEscuro text-branco rounded-lg w-24">
        Adcionar
      </button>
      
    </div>
  );
}

export default Exemplo1;
